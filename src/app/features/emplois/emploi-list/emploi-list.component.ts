import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-emploi-list',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './emploi-list.component.html',
  styleUrl: './emploi-list.component.css'
})
export class EmploiListComponent {

}
