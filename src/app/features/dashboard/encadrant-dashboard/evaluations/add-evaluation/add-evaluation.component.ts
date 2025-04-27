import { Component } from '@angular/core';
import { EvaluationService } from '../evaluation.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-evaluation',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-evaluation.component.html',
  styleUrl: './add-evaluation.component.css'
})
export class AddEvaluationComponent {
  stagiaireNom: string = '';
  stagiaireId: number = 0;
  encadrantId: number = 0;
  note: number = 0;
  commentaire: string = '';
  getStagiaire: any;

  constructor(
    private evaluationService: EvaluationService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    const userId = this.authService.getUserId();
    if (userId !== null) {
      this.encadrantId = userId;
    } else {
      console.error("L'encadrant n'est pas connecté");
    }
  }

  // onSubmit(): void {
  //   const evaluation = {
  //     note: this.note,
  //     commentaire: this.commentaire,
  //     stagiaireId: this.stagiaireId, // récupéré dynamiquement
  //     encadrantId: this.encadrantId  // depuis AuthService ou autre
  //   };

  //   this.evaluationService.createEvaluation(evaluation).subscribe(() => {
  //     console.log('Évaluation enregistrée');
  //   });
  // }

  // onSubmit(): void {
  //   if (this.stagiaireId && this.note >= 0 && this.commentaire.trim()) {
  //     const evaluation = {
  //       note: this.note,
  //       commentaire: this.commentaire,
  //       stagiaire_id: this.stagiaireId,
  //       encadrant_id: this.encadrantId
  //     };

  //     this.evaluationService.createEvaluation(evaluation).subscribe({
  //       next: () => console.log('Évaluation enregistrée'),
  //       error: (err) => console.error('Erreur:', err)
  //     });

  //   } else {
  //     alert('Tous les champs sont requis');
  //   }
  // }

  // ngOnInit(): void {
  //   this.stagiaireId = 1;
  //   this.encadrantId = this.authService.getUserId()!;
  // }

  ngOnInit() {
    const stagiaire = this.getStagiaire();
    if (stagiaire) {
      this.stagiaireNom = stagiaire.nom;
    }
  }

  onSubmit(): void {
    if (this.note && this.commentaire) {
      const evaluationData = {
        stagiaire_id: this.stagiaireId,
        encadrant_id: this.encadrantId,
        note: this.note,
        commentaire: this.commentaire
      };

      this.evaluationService.createEvaluation(evaluationData).subscribe({
        next: (response) => {
          console.log('Évaluation enregistrée avec succès:', response);
        },
        error: (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'évaluation:', error);
        }
      });
    }
  }


  // onSubmit() {
  //   if (this.stagiaireId && this.note && this.commentaire) {
  //     this.evaluationService.createEvaluation(this.stagiaireId, this.encadrantId, this.note, this.commentaire).subscribe(
  //       (response) => {
  //         alert('Évaluation soumise avec succès');
  //       },
  //       (error) => {
  //         console.error(error);
  //         alert('Erreur lors de la soumission de l\'évaluation');
  //       }
  //     );
  //   } else {
  //     alert('Veuillez remplir tous les champs.');
  //   }
  // }
}
