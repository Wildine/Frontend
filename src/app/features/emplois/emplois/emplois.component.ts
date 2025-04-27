import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { SearchbarComponent } from "../../../shared/components/searchbar/searchbar.component";

@Component({
  selector: 'app-emplois',
  imports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent
],
  templateUrl: './emplois.component.html',
  styleUrl: './emplois.component.css'
})
export class EmploisComponent {

}
