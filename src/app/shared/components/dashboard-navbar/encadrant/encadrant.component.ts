import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-encadrant',
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './encadrant.component.html',
  styleUrl: './encadrant.component.css'
})
export class EncadrantComponent {

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
