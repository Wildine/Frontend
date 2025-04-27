import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OffresService } from '../offres.service';
import { Offres } from '../../../../../core/models/offres.model';
import { AuthService } from '../../../../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-offres',
  imports: [CommonModule, RouterLink],
  templateUrl: './gestion-offres.component.html',
  styleUrl: './gestion-offres.component.css'
})
export class GestionOffresComponent {
    offres: Offres[] = [];
    user: any;

  constructor(
    private offreService: OffresService,
    // private candidatureService: CandidaturesService,
    private authService: AuthService) {}

  // ngOnInit(): void {
  //   // Récupérer la liste des offres via le service
  //   this.user = this.authService.getCurrentUser();
  //   this.offreService.getAllOffres().subscribe(
  //     (data) => {
  //       this.offres = data; // Assigner les données aux offres
  //     },
  //     (error) => {
  //       console.error("Erreur lors de la récupération des offres", error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    // Récupérer l'utilisateur connecté
    this.user = this.authService.getCurrentUser();

    this.offreService.getAllOffres().subscribe((data) => {
      this.offres = data;
    });

    // Vérifier si l'utilisateur a un ID d'entreprise
    if (this.user && this.user.entrepriseId) {
      // Appeler le service pour récupérer les offres de l'entreprise
      this.offreService.getOffresParEntreprise(this.user.entrepriseId).subscribe(
        (data) => {
          this.offres = data;
        },
        (error) => {
          console.error("Erreur lors de la récupération des offres", error);
        }
      );
    } else {
      console.error("L'utilisateur n'a pas d'ID d'entreprise.");
    }
  }


  ajouterOffre() {
  }

  modifierOffre(offre: any) {
  }

  // supprimerOffre(id: number) {
  //   this.offres = this.offres.filter(o => o.id !== id);
  // }
  supprimerOffre(id: number) {
    this.offreService.supprimerOffre(id).subscribe(
      response => {
        this.offres = this.offres.filter(offre => offre.id !== id);
        alert("Offre supprimée avec succès.");
      },
      error => {
        console.error('Erreur lors de la suppression de l\'offre', error);
        alert("Erreur lors de la suppression de l'offre.");
      }
    );
  }
}
