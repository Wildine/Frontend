import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../entreprise-dashboard/dashboard.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-etudiant-dashboard',
  imports: [],
  templateUrl: './etudiant-dashboard.component.html',
  styleUrl: './etudiant-dashboard.component.css'
})
export class EtudiantDashboardComponent implements OnInit {
  totalCandidatures: number = 0;
  totalOffres: number = 0;
  totalEntretiens: number = 0;

  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.dashboardService.getDashboardEtudiant().subscribe(
      (response) => {
        this.totalCandidatures = response.data.total_candidatures;
        this.totalEntretiens = response.data.total_entretiens;
        // this.totalEvaluations = response.data.total_evaluations;
      },
      (error) => {
        console.error('Erreur lors de la récupération du tableau de bord:', error);
      }
    );
  }
}
