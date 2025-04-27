import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/entreprise-dashboard/gestion-offre']);
  }
}
