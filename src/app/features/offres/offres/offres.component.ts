import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/components/searchbar/searchbar.component';
import { EmploisComponent } from '../../emplois/emplois/emplois.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-offres',
  imports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent
  ],
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent {

}
