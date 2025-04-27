import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Offres } from '../../../../../core/models/offres.model';
import { OffresService } from '../offres.service';
import { CandidaturesService } from '../../candidatures/candidatures.service';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-offre-list',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './offre-list.component.html',
  styleUrl: './offre-list.component.css'
})
export class OffreListComponent {
  offres: Offres[] = [];
  user: any;
  errorMessage: string = '';

  constructor(
    private offreService: OffresService,
    private candidatureService: CandidaturesService,
    private authService: AuthService,
    private router: Router) {}



  // ngOnInit(): void {
  //   this.offreService.getAllOffres().subscribe({
  //     next: (data: Offres[]) => this.offres = data,
  //     error: err => console.error('Erreur lors de la récupération des offres', err)
  //   });
  // }

  ngOnInit(): void {
    // Récupérer la liste des offres via le service
    this.user = this.authService.getCurrentUser();
    this.offreService.getAllOffres().subscribe(
      (data) => {
        this.offres = data; // Assigner les données aux offres
      },
      (error) => {
        console.error("Erreur lors de la récupération des offres", error);
      }
    );
  }

  // postuler(offreId: number): void {
  //   const user = this.authService.getCurrentUser(); // Récupérer l'utilisateur connecté
  //   if (!user) {
  //     alert("Vous devez être connecté pour postuler.");
  //     this.router.navigate(['/login']); // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  //     return;
  //   }

  //   const userId = user.id; // Récupérer l'ID de l'utilisateur connecté

  //   // Appeler le service de candidature pour envoyer la candidature
  //   this.candidatureService.postuler({ userId, offreId }).subscribe(
  //     (response) => {
  //       alert("Candidature envoyée avec succès !");
  //       this.router.navigate(['/etudiant-dashboard']); // Rediriger après la candidature
  //     },
  //     (error) => {
  //       alert("Une erreur s'est produite lors de la candidature.");
  //       console.error(error);
  //     }
  //   );
  // }

  postuler(offreId: number): void {
    const user = this.authService.getCurrentUser();

    if (!user) {
      alert("Vous devez être connecté pour postuler.");
      this.router.navigate(['/login']);
      return;
    }

    if (user.role !== 'etudiant' && user.role !== 'demande_emploi') {
      alert("Seuls les étudiants et demandeurs d'emploi peuvent postuler.");
      return;
    }

    const userId = user.id;

    this.candidatureService.postuler({ userId, offreId }).subscribe(
      (response) => {
        // alert("Candidature envoyée avec succès !");
        // this.router.navigate(['/etudiant-dashboard']);
        if (user.role === 'etudiant') {
        alert("Candidature envoyée avec succès !");
          // this.router.navigate(['/etudiant-dashboard']);
        } else if (user.role === 'demande_emploi') {
        alert("Candidature envoyée avec succès !");
          // this.router.navigate(['/chercheur-dashboard']);
        }
      },
      (error) => {
        if (error.status === 400 && error.error.message === 'Vous avez déjà postulé à cette offre') {
          alert("Vous avez déjà postulé à cette offre.");
        } else {
          alert("Une erreur s'est produite lors de la candidature.");
        }
        console.error(error);
      }
    );
  }



  // postuler(offre: Offres): void {
  //   console.log("Candidature envoyée pour l'offre", offre.id);
  // }

  // ngOnInit(): void {
  //   this.getOffres();
  // }

  // Récupérer les offres
  // getOffres(): void {
  //   this.offreService.getOffres().subscribe(
  //     (offres) => {
  //       this.offres = offres;
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des offres', error);
  //     }
  //   );
  // }

  // Appel de la méthode pour postuler pour l'offre spécifique
  // postuler(offre: any): void {
  //   const user = localStorage.getItem('currentUser');
  //   if (!user) {
  //     alert("Vous devez être connecté pour postuler.");
  //     return;
  //   }

  //   const userId = JSON.parse(user).id;
  //   const offreId = offre.id;
  //   const token = JSON.parse(user).token;  // Récupérer le token

  //   // Appel du service avec le token dans l'en-tête
  //   this.candidatureService.postuler(userId, offreId, token).subscribe(
  //     (response) => {
  //       alert("Candidature envoyée avec succès !");
  //     },
  //     (error) => {
  //       alert("Une erreur s'est produite lors de la candidature.");
  //       console.error(error);
  //     }
  //   );
  // }

}
