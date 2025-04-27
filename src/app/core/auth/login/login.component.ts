import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage: string = '';

  user: User = new User('', '', '', '', '', '', '');

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const payload: any = {
      email: this.user.email,
      password: this.user.password,
    };

    this.authService.login(this.user).subscribe({
      next: (res) => {
        if (res && res.user) {
          localStorage.setItem('token', res.token);
          const role = res.user.role;
          const user = {
            nom: res.user.nom,
            prenom: res.user.prenom,
            role: role
          };

          localStorage.setItem('user', JSON.stringify(user));

          if (role === 'entreprise' && res.user.entrepriseId) {
            localStorage.setItem('entrepriseId', res.user.entrepriseId.toString());
          }

          switch (role) {
            case 'etudiant':
              this.router.navigate(['/etudiant-dashboard/']);
              break;
            case 'entreprise':
              this.router.navigate(['/entreprise-dashboard/']);
              break;
            case 'demande_emploi':
              this.router.navigate(['/chercheur-dashboard/']);
              break;
            case 'encadrant':
              this.router.navigate(['/encadrant-dashboard/']);
              break;
            default:
              this.router.navigate(['/']);
          }
        }
      },

      error: (err) => {
        console.error(err);
        this.errorMessage = err.error.message || 'Erreur lors de la connexion';
      }
    });
  }
}
