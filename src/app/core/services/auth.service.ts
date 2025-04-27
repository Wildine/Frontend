import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.1.32:3000/api/auth';
  // private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  getUserId(): number | null {
    const user = this.getCurrentUser();
    return user ? user.id : null;
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((response: any) => {
        console.log('Réponse de la connexion:', response);

        // Sauvegarde l'utilisateur dans localStorage
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);

        // Vérifie que 'prenom' et 'nom' sont dans response.user avant de les sauvegarder
        if (response.user && response.user.prenom && response.user.nom) {
          localStorage.setItem('prenom', response.user.prenom);
          localStorage.setItem('nom', response.user.nom);
        } else {
          console.log('Les champs prenom et nom sont manquants dans la réponse.');
        }

        this.router.navigate(['/dashboard']);
      }),
      catchError((error) => {
        if (error.status === 504) {
          console.error('Le serveur met trop de temps à répondre');
        }
        return throwError(error);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
