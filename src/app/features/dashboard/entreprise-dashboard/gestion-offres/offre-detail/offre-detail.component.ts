import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Offres } from '../../../../../core/models/offres.model';
import { OffresService } from '../offres.service';
import { AuthService } from '../../../../../core/services/auth.service';
import { CandidaturesService } from '../../candidatures/candidatures.service';

@Component({
  selector: 'app-offre-detail',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './offre-detail.component.html',
  styleUrl: './offre-detail.component.css'
})
export class OffreDetailComponent  {
  user: any;
  offre: Offres | undefined;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private offreService: OffresService,
    private candidatureService: CandidaturesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.offreService.getOffreById(Number(id)).subscribe({
        next: (data: Offres) => this.offre = data,
        error: err => console.error("Erreur lors de la récupération de l'offre", err)
      });
    }
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.offreService.getOffreById(Number(id)).subscribe({
  //       next: (data: Offres) => this.offre = data,
  //       error: err => console.error("Erreur lors de la récupération de l'offre", err)
  //     });
  //   }
  // }

  // postuler(): void {
  //   console.log("Candidature envoyée pour l'offre", this.offre?.id);
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
    // const offreId = this.offre?.id;

    // if (!offreId) {
    //   alert("Offre introuvable.");
    //   return;
    // }

    this.candidatureService.postuler({ userId, offreId }).subscribe(
      () => {
        alert("Candidature envoyée avec succès !");
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

  // postuler(offreId: number): void {
  //   const user = this.authService.getCurrentUser();

  //   if (!user) {
  //     alert("Vous devez être connecté pour postuler.");
  //     this.router.navigate(['/login']);
  //     return;
  //   }

  //   if (user.role !== 'etudiant' && user.role !== 'demande_emploi') {
  //     alert("Seuls les étudiants et demandeurs d'emploi peuvent postuler.");
  //     return;
  //   }

  //   const userId = user.id;
  //   const data = { userId, offreId };

  //   // Appeler la bonne méthode en fonction du rôle
  //   if (user.role === 'etudiant') {
  //     this.candidatureService.postulerEtudiant(data).subscribe(
  //       (response) => {
  //         alert("Candidature envoyée avec succès !");
  //         this.router.navigate(['/etudiant-dashboard']);
  //       },
  //       (error) => {
  //         if (error.status === 400 && error.error.message === 'Vous avez déjà postulé à cette offre') {
  //           alert("Vous avez déjà postulé à cette offre.");
  //         } else {
  //           alert("Une erreur s'est produite lors de la candidature.");
  //         }
  //         console.error(error);
  //       }
  //     );
  //   } else if (user.role === 'demande_emploi') {
  //     this.candidatureService.postulerDemandeur(data).subscribe(
  //       (response) => {
  //         alert("Candidature envoyée avec succès !");
  //         this.router.navigate(['/demandeur-dashboard']);
  //       },
  //       (error) => {
  //         if (error.status === 400 && error.error.message === 'Vous avez déjà postulé à cette offre') {
  //           alert("Vous avez déjà postulé à cette offre.");
  //         } else {
  //           alert("Une erreur s'est produite lors de la candidature.");
  //         }
  //         console.error(error);
  //       }
  //     );
  //   }
  // }
}

