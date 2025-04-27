import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OffresService } from '../offres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-add',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './offre-add.component.html',
  styleUrl: './offre-add.component.css'
})
export class OffreAddComponent {
  offre = {
    entrepriseId: '',
    titre: '',
    description: '',
    date_expiration: '',
    type_offre: '',
    lieu: '',
    duree: ''
  };

  constructor(private offresService: OffresService, private router: Router) {}

  onSubmit() {
    const entrepriseId = localStorage.getItem('entrepriseId');

    if (entrepriseId) {
      this.offre.entrepriseId = entrepriseId;
      this.offresService.createOffre(this.offre).subscribe({
        next: (res) => {
          console.log('Offre publiée', res);
          // this.router.navigate(['/offres']);
        },
        error: (err) => {
          console.error('Erreur lors de la publication', err);
          alert('Erreur lors de la publication de l\'offre.');
        }
      });
    } else {
      console.error('Aucune entreprise connectée.');
    }
  }
}
