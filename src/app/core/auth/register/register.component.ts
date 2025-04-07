import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  selectedRole: string = '';

  user: any = {
    prenom: '',
    nom: '',
    universite: '',
    nomEntreprise: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}
  // injection du service et du router

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const payload: any = {
      role: this.selectedRole,
      email: this.user.email,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword
    };

    // ajoute les champs spécifiques selon le rôle
    if (this.selectedRole === 'etudiant') {
      payload.prenom = this.user.prenom;
      payload.nom = this.user.nom;
      payload.universite = this.user.universite;
    } else if (this.selectedRole === 'entreprise') {
      payload.nomEntreprise = this.user.nomEntreprise;
    } else if (this.selectedRole === 'demandeur' || this.selectedRole === 'encadrant') {
      payload.prenom = this.user.prenom;
      payload.nom = this.user.nom;
    }

    // Appel au service pour envoyer les données à l'API
    // this.authService.register(payload).subscribe({
    //   next: (response) => {
    //     console.log('Inscription réussie :', response);
    //     this.router.navigate(['/login']);
    //   },
    //   error: (error) => {
    //     console.error('Erreur lors de l’inscription :', error);
    //   }
    // });
  }
}
