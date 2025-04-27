import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Module Angular de base
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  selectedRole: string = '';
  user: User = new User('', '', '', '', '', '', '', '', '', '');

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const payload: any = {
      role: this.selectedRole,
      email: this.user.email,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword,
    };

    // Ajoute les champs spécifiques selon le rôle
    if (this.selectedRole === 'etudiant') {
      payload.prenom = this.user.prenom;
      payload.nom = this.user.nom;
      payload.universite = this.user.universite;
    } else if (this.selectedRole === 'entreprise') {
      payload.nom_entreprise = this.user.nom_entreprise;
      payload.secteur = this.user.secteur;
      payload.description = this.user.description;
    } else if (this.selectedRole === 'demande_emploi' || this.selectedRole === 'encadrant') {
      payload.prenom = this.user.prenom;
      payload.nom = this.user.nom;
    }

    // Appel de la méthode register de AuthService pour envoyer les données à l'API
    this.authService.register(payload).subscribe({
      next: (response) => {
        console.log('Inscription réussie :', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erreur lors de l’inscription :', error);
      }
    });
  }
}
