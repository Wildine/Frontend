import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { SearchbarComponent } from "../../shared/components/searchbar/searchbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { Entreprise } from './entreprise.model';
import { EntrepriseService } from './entreprise.service';
import { CommonModule } from '@angular/common';
import { OffresService } from '../offres/offres.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  imports: [
    CommonModule,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent
  ],
  templateUrl: './entreprise.component.html',
  styleUrl: './entreprise.component.css'
})
export class EntrepriseComponent implements OnInit {
  entreprises: Entreprise[] = [];
  offres: any[] = [];

  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit(): void {
    this.getEntreprises();
  }

  getEntreprises(): void {
    this.entrepriseService.getEntreprises().subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
      },
      error => {
        console.error('Erreur lors de la récupération des entreprises', error);
      }
    );
  }
}
