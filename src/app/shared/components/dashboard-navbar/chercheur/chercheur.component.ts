import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-chercheur',
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './chercheur.component.html',
  styleUrl: './chercheur.component.css'
})
export class ChercheurComponent {

  constructor(private authService: AuthService) {}

    logout() {
      this.authService.logout();
    }

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;

  ngAfterViewInit() {
    this.toggleBtn.nativeElement.addEventListener('click', () => {
      this.sidebar.nativeElement.classList.toggle('active');
    });
  }
}
