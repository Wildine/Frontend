import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncadrantService } from '../add-encadrant/encadrant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encadrants',
  imports: [CommonModule],
  templateUrl: './encadrants.component.html',
  styleUrl: './encadrants.component.css'
})
export class EncadrantsComponent {
  encadrants: any[] = [];

  constructor(private encadrantService: EncadrantService, private router: Router) {}

  ngOnInit() {
    const entrepriseId = localStorage.getItem('entrepriseId');

    if (entrepriseId) {
      this.encadrantService.getEncadrantsByEntreprise(entrepriseId).subscribe({
        next: (data) => {
          this.encadrants = data; 
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des encadrants', err);
        }
      });
    } else {
      console.error('ID de l\'entreprise non trouvé dans le localStorage');
    }
  }
}
