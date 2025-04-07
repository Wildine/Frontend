import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { SearchbarComponent } from '../../../shared/components/searchbar/searchbar.component';

@Component({
  selector: 'app-stages',
  imports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent
  ],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.css'
})
export class StagesComponent {

}
