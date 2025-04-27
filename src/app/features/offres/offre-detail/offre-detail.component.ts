import { Component, OnInit } from '@angular/core';
import { Offres } from '../../../core/models/offres.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OffresService } from '../offres.service';

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

  offre: Offres | undefined;

  constructor(
    private route: ActivatedRoute,
    private offreService: OffresService
  ) {}

  ngOnInit(): void {
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

  postuler(): void {
    console.log("Candidature envoyée pour l'offre", this.offre?.id);
  }
}
