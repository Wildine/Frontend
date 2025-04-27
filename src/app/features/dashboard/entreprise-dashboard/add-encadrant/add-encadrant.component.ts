import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EncadrantService } from './encadrant.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-add-encadrant',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-encadrant.component.html',
  styleUrl: './add-encadrant.component.css'
})
export class AddEncadrantComponent {
  encadrants: any[] = [];
    user: User = new User('', '', '', '', '', '', '', '', '', '');

  constructor(private encadrantService: EncadrantService, private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    this.user.role = 'encadrant';

    const payload: any = {
      email: this.user.email,
      password: this.user.password
    };

    this.encadrantService.createEncadrant(this.user).subscribe({
      next: () => {
        alert('Encadrant créé avec succès');
        this.router.navigate(['/entreprise-dashboard']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la création de l\'encadrant');
      }
    });
  }
}
