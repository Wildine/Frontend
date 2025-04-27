import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user: any = null;


  constructor(
    private router: Router,
    private authService: AuthService
  ) {  }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/login']);
  }

  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

//   isMenuOpen = false;

// toggleMenu() {
//   this.isMenuOpen = !this.isMenuOpen;
// }


// isOffresOpen = false;
// isCompteOpen = false;

// toggleOffres() {
//   this.isOffresOpen = !this.isOffresOpen;
// }

// toggleCompte() {
//   this.isCompteOpen = !this.isCompteOpen;
// }

  // logout() {
  //   this.authService.logout();
  //   this.user = null;
  //   // this.router.navigate(['/home']);
  // }

}
