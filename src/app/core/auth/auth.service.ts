import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.1.16:3000/api/auth';

  constructor(private http: HttpClient) {}

  // Inscription de l'utilisateur
  // register(userData: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  register(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  };
  // Connexion de l'utilisateur
  // login(credentials: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // Gestion des erreurs
  private handleError(error: any): Observable<any> {
    console.error('Erreur API', error);
    throw error;
  }
}

