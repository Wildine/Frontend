import { Component } from '@angular/core';
import { EntretienService } from '../entretien.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidaturesService } from '../../candidatures/candidatures.service';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-add-entretien',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-entretien.component.html',
  styleUrl: './add-entretien.component.css'
})
export class AddEntretienComponent {
  entretien = {
    date_entretien: '',
    candidature_id: null,
    mode: '',
    lien_ou_lieu: '',
    message: ''
  };
  candidatures: any[] = [];
  entretiens: any[] = [];

  constructor(
    private entretienService: EntretienService,
    private candidatureService: CandidaturesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getCandidatures();
    this.getEntretiens();
  }

  // Fonction pour récupérer les candidatures
  getCandidatures() {
    const entrepriseId = this.authService.getUserId();
    if (entrepriseId !== null) {
      this.candidatureService.getCandidaturesByEntreprise(entrepriseId).subscribe(data => {
        this.candidatures = data;
      });
    }

      this.candidatureService.getAllCandidatures().subscribe(data => {
        this.candidatures = data;
      });
  }

  // Fonction pour récupérer les entretiens planifiés
  getEntretiens() {
    this.entretienService.getAllEntretiens().subscribe(data => {
      this.entretiens = data;
    });
  }


  planifierEntretien() {
    console.log(this.entretien);

    this.entretienService.createEntretien(this.entretien).subscribe(
      (response) => {
        alert('Entretien planifié avec succès!');
        this.getEntretiens();
        this.resetForm();
      },
      (error) => {
        console.error("Erreur lors de la planification de l'entretien:", error);
        alert("Erreur lors de la planification de l'entretien");
      }
    );
  }
  // planifierEntretien() {
  //   this.entretienService.createEntretien(this.entretien).subscribe(
  //     (response) => {
  //       alert('Entretien planifié avec succès!');
  //       this.getEntretiens();
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error("Erreur lors de la planification de l'entretien:", error);
  //       alert("Erreur lors de la planification de l'entretien");
  //     }
  //   );
  // }

  // Réinitialiser le formulaire après soumission
  resetForm() {
    this.entretien = {
      date_entretien: '',
      candidature_id: null,
      mode: '',
      lien_ou_lieu: '',
      message: ''
    };
  }
}
