import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OffresService } from '../offres.service';

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
  successMessage = '';
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

  // onSubmit() {
  //   const entrepriseId = localStorage.getItem('entrepriseId');

  //   if (entrepriseId) {
  //     this.offre.entrepriseId = entrepriseId;
  //     this.offresService.createOffre(this.offre).subscribe({
  //       next: (res) => {
  //         console.log('Offre publiée', res);
  //         // this.router.navigate(['/offres']);
  //       },
  //       error: (err) => {
  //         console.error('Erreur lors de la publication', err);
  //       }
  //     });
  //   } else {
  //     console.error('Aucune entreprise connectée.');
  //   }
  // }


  // onSubmit() {
  //   const entrepriseId = localStorage.getItem('entrepriseId');

  //   if (entrepriseId) {
  //     this.offre.entrepriseId = entrepriseId;
  //     this.offresService.createOffre(this.offre).subscribe({
  //       next: (res) => {
  //         this.successMessage = "L'offre a été publiée avec succès !";
  //         setTimeout(() => {
  //           this.router.navigate(['/entreprise-dashboard']); // adapte le chemin
  //         }, 2000);
  //       },
  //       error: (err) => {
  //         console.error('Erreur lors de la publication', err);
  //       }
  //     });
  //   } else {
  //     console.error('Aucune entreprise connectée.');
  //   }
  // }

  onSubmit(offreForm: NgForm) {
    if (offreForm.valid) {
      const entrepriseId = localStorage.getItem('entrepriseId');
      if (entrepriseId) {
        this.offre.entrepriseId = entrepriseId;
        this.offresService.createOffre(this.offre).subscribe({
          next: () => {
            this.successMessage = "L'offre a été publiée avec succès !";
            // setTimeout(() => {
              this.router.navigate(['/entreprise-dashboard/success']);
            // }, 2000);
          },
          error: (err) => {
            console.error('Erreur lors de la publication', err);
          }
        });
      } else {
        console.error('Aucune entreprise connectée.');
      }
    }
  }


  // Cette méthode est appelée au moment de la soumission du formulaire
  // onSubmit(offreForm: NgForm) {
  //   // Vérifier si le formulaire est valide avant de soumettre
  //   if (offreForm.valid) {
  //     const entrepriseId = localStorage.getItem('entrepriseId');
  //     if (entrepriseId) {
  //       this.offre.entrepriseId = entrepriseId;
  //       this.offresService.createOffre(this.offre).subscribe({
  //         next: (res) => {
  //           console.log('Offre publiée', res);
  //           // Rediriger vers la page de succès après publication réussie
  //           this.router.navigate(['/entreprise-dashboard/success']);
  //         },
  //         error: (err) => {
  //           console.error('Erreur lors de la publication', err);
  //           // Gérer l'erreur ici
  //         }
  //       });
  //     } else {
  //       console.error('Aucune entreprise connectée.');
  //       // Gérer l'erreur d'absence d'entreprise connectée
  //     }
  //   } else {
  //     console.log('Le formulaire n\'est pas valide');
  //     // Gérer l'affichage d'un message d'erreur
  //   }
  // }
}
