import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Offres } from '../../../core/models/offres.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { OffresService } from '../offres.service';

register();

@Component({
  selector: 'app-offre-list',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent {
  offres: Offres[] = [];
  errorMessage: string = '';

  constructor(private offreService: OffresService, private router: Router) {}

  ngOnInit(): void {
    this.offreService.getAllOffres().subscribe({
      next: (data: Offres[]) => this.offres = data,
      error: err => console.error('Erreur lors de la récupération des offres', err)
    });
  }

  postuler(offre: Offres): void {
    console.log("Candidature envoyée pour l'offre", offre.id);
  }
}
