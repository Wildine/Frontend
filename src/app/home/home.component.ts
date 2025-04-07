import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SearchbarComponent } from '../shared/components/searchbar/searchbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    RouterLink
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
