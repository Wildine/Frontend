import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SearchbarComponent } from '../shared/components/searchbar/searchbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { OffreListComponent } from '../features/dashboard/entreprise-dashboard/gestion-offres/offre-list/offre-list.component';
register();

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    OffreListComponent,
    SearchbarComponent,
    FooterComponent,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchTerm: string = '';

onSearch() {
  // Tu peux faire une redirection ou filtrer localement
  console.log('Recherche lancée pour :', this.searchTerm);
  // Exemple : this.router.navigate(['/offres'], { queryParams: { q: this.searchTerm } });
}

}
