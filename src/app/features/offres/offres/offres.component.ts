import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { OffreListComponent } from '../offre-list/offre-list.component';
import { SearchbarComponent } from '../../../shared/components/searchbar/searchbar.component';

@Component({
  selector: 'app-offres',
  imports: [
    CommonModule,
    NavbarComponent,
    SearchbarComponent,
    OffreListComponent,
    FooterComponent,
    FormsModule,
  ],
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent {

  constructor() {}

}
