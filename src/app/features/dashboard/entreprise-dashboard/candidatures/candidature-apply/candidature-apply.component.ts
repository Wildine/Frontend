import { Component, Input, OnInit } from '@angular/core';
import { CandidaturesService } from '../candidatures.service';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidature-apply',
  imports: [CommonModule],
  templateUrl: './candidature-apply.component.html',
  styleUrl: './candidature-apply.component.css'
})
export class CandidatureApplyComponent implements OnInit {
  // @Input() offreId: number;
  // userId: number;
  @Input() offreId!: number;
  userId!: number;

  constructor(
    private candidatureService: CandidaturesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur connecté
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userId = user.id;
    } else {
      alert("Vous devez être connecté pour postuler.");
      this.router.navigate(['/login']);  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    }
  }

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



  // ngOnInit(): void {
  //   // Vérifier si l'utilisateur est connecté
  //   const user = this.authService.getCurrentUser();
  //   if (user) {
  //     this.userId = user.id;
  //   } else {
  //     alert("Vous devez être connecté pour postuler.");
  //   }
  // }

  // postuler(): void {
  //   if (!this.userId) {
  //     alert("Vous devez être connecté pour postuler.");
  //     return;
  //   }

  //   // Appeler le service pour enregistrer la candidature
  //   this.candidatureService.postuler(this.userId, this.offreId).subscribe(
  //     (response) => {
  //       alert("Candidature envoyée avec succès !");
  //       this.router.navigate(['/etudiant-dashboard']);  // Rediriger l'utilisateur après la candidature
  //     },
  //     (error) => {
  //       alert("Une erreur s'est produite lors de la candidature.");
  //       console.error(error);
  //     }
  //   );
  // }
}
