import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { AuthService } from '../../../core/services/auth.service';
import { DashboardService } from './dashboard.service';
import { CommonModule } from '@angular/common';
import { OffresService } from './gestion-offres/offres.service';
import { Offres } from '../../../core/models/offres.model';
import { CandidaturesService } from './candidatures/candidatures.service';

register();

@Component({
  selector: 'app-entreprise-dashboard',
  imports: [
    CommonModule,
    RouterLink
  ],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './entreprise-dashboard.component.html',
  styleUrl: './entreprise-dashboard.component.css'
})
export class EntrepriseDashboardComponent implements OnInit {
  offresActives: any[] = [];
  offres: Offres[] = [];
  candidatures: any[] = [];
  totalCandidatures: number = 0;
  totalOffres: number = 0;
  totalEntretiens: number = 0;
  candidaturesEnAttenteCount: number = 0;
  totalCandidaturesAcceptees: number = 0;
  totalCandidaturesRejetees: number = 0;



  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService,
    private offresService: OffresService,
    private candidatureService: CandidaturesService
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    const entreprise = this.authService.getCurrentUser();

    if (entreprise) {
      this.candidatureService.getCandidaturesEnAttenteByEntreprise(entreprise.id).subscribe({
        next: (response) => {
          this.candidaturesEnAttenteCount = response.count;
        },
        error: (err) => console.error(err)
      });

      this.candidatureService.getCandidaturesByEntreprise(1).subscribe((data: any) => {
        console.log(data);
        this.candidatures = data;
      });
    }

    // this.candidatureService.getCandidaturesAcceptees(currentUser.id).subscribe({
    //   next: (res) => {
    //     this.totalCandidaturesAcceptees = res.totalCandidaturesAcceptees;
    //   },
    //   error: (err) => {
    //     console.error('Erreur lors de la récupération des candidatures acceptées', err);
    //   }
    // });

    // this.candidatureService.getCandidaturesRejetees(currentUser.id).subscribe({
    //   next: (res) => {
    //     this.totalCandidaturesRejetees = res.totalCandidaturesRejetees;
    //   },
    //   error: (err) => {
    //     console.error('Erreur lors de la récupération des candidatures rejetées', err);
    //   }
    // });

    // this.candidatureService
    //   .getCandidaturesAcceptees(currentUser.id)
    //   .subscribe(res => this.totalCandidaturesAcceptees = res.totalCandidaturesAcceptees);

    // Candidatures rejetées
    // this.candidatureService
    //   .getCandidaturesRejetees(currentUser.id)
    //   .subscribe(res => this.totalCandidaturesRejetees = res.totalCandidaturesRejetees);

    this.candidatureService.getCandidaturesAcceptees(currentUser.id).subscribe({
      next: (res) => this.totalCandidaturesAcceptees = res.totalCandidaturesAcceptees,
      error: (err) => console.error('Erreur lors de la récupération des candidatures acceptées', err)
    });

    // this.dashboardService.getDashboardEntreprise().subscribe(
    //   (response) => {
    //     const data = response.data;
    //     this.totalCandidatures = data.total_candidatures;
    //     this.totalOffres = data.total_offres;
    //     this.totalEntretiens = data.total_entretiens;
    //     this.totalCandidaturesAcceptees = data.total_candidatures_acceptees;
    //     this.totalCandidaturesRejetees = data.total_candidatures_rejetees;
    //   },
    //   (error) => {
    //     console.error('Erreur lors de la récupération du tableau de bord:', error);
    //   }
    // );




    if (currentUser.role === 'entreprise') {
      this.dashboardService.getDashboardEntreprise().subscribe(
        (response) => {
          this.totalCandidatures = response.data.total_candidatures;
          this.totalOffres = response.data.total_offres;
          this.totalEntretiens = response.data.total_entretiens;
        },
        (error) => {
          console.error('Erreur lors de la récupération du tableau de bord:', error);
        }
      );

      this.offresService.getOffresByEntreprise(currentUser.id).subscribe(
        (offres: Offres[]) => {  // Typage explicite des offres comme étant un tableau d'instances de Offres
          // console.log('Données des offres reçues:', offres);

          // Vérification que les données reçues sont un tableau
          if (Array.isArray(offres)) {
            // this.offresActives = offres.filter(offre => offre.statut === 'active');
            this.totalOffres = this.offresActives.length; // ← ligne à ajouter

          } else {
            // console.error('Les données des offres ne sont pas un tableau');
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des offres actives:', error);
        }
      );
    } else if (currentUser.role === 'etudiant') {
      this.dashboardService.getDashboardEtudiant().subscribe(
        (response) => {
          // Gérer les données pour l'étudiant ici
        },
        (error) => {
          console.error('Erreur lors de la récupération du tableau de bord:', error);
        }
      );
    }
  }

  // ngOnInit(): void {
  //   // Récupération des offres
  //   this.offresService.getOffres().subscribe(
  //     (offres: Offres[]) => {
  //       // Filtrer les offres actives
  //       this.offresActives = offres.filter(offre => offre.statut === 'active');
  //       console.log('Offres actives:', this.offresActives);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des offres:', error);
  //     }
  //   );
  // }
}
