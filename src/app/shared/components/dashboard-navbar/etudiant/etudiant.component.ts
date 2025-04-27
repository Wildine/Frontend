import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-etudiant',
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {

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
