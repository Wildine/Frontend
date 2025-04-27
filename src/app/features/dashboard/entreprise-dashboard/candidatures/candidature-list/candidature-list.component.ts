import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CandidaturesService } from '../candidatures.service';

@Component({
  selector: 'app-candidature-list',
  imports: [CommonModule],
  templateUrl: './candidature-list.component.html',
  styleUrl: './candidature-list.component.css'
})
export class CandidatureListComponent {
  candidatures: any[] = [];

  constructor(private candidaturesService: CandidaturesService) {}


  ngOnInit(): void {
    this.candidaturesService.getCandidaturesByEntreprise(1).subscribe((data: any) => {
      console.log(data);
      this.candidatures = data;
    });
  }

  accepter(id: number) {
    this.candidaturesService.accepterCandidature(id).subscribe({
      next: res => console.log('Acceptée:', res),
      error: err => console.error('Erreur:', err.error.message)
    });
  }

  rejeter(id: number) {
    this.candidaturesService.rejeterCandidature(id).subscribe({
      next: res => console.log('Rejetée:', res),
      error: err => console.error('Erreur:', err.error.message)
    });
  }





  // accepterCandidature(id: number): void {
  //   // Met à jour le statut de la candidature en "accepté"
  //   this.candidaturesService.updateStatut(id, 'accepte').subscribe(() => {
  //     // Recharger la liste des candidatures après l'acceptation
  //     this.ngOnInit();
  //   });
  // }

  // refuserCandidature(id: number): void {
  //   // Met à jour le statut de la candidature en "rejeté"
  //   this.candidaturesService.updateStatut(id, 'rejete').subscribe(() => {
  //     // Recharger la liste des candidatures après le refus
  //     this.ngOnInit();
  //   });
  // }
}
