import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../../shared/components/navbar/navbar.component';
import { SearchbarComponent } from '../../../../../shared/components/searchbar/searchbar.component';
import { OffreListComponent } from '../offre-list/offre-list.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';

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

}
