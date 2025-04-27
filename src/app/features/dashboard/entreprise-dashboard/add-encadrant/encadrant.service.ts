import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EncadrantService {
  private apiUrl = 'http://192.168.1.32:3000/api/auth';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les encadrants d'une entreprise
  // getEncadrantsByEntreprise(entrepriseId: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/${entrepriseId}`);
  // }

  // Méthode pour récupérer les encadrants d'une entreprise
  // getEncadrantsByEntreprise(): Observable<any[]> {
  //   const entrepriseId = localStorage.getItem('entrepriseId');

  //   if (!entrepriseId) {
  //     return new Observable<any[]>();
  //   }

  //   return this.http.get<any[]>(`${this.apiUrl}/${entrepriseId}/encadrants`);
  // }

  getEncadrantsByEntreprise(entrepriseId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${entrepriseId}`).pipe(
      catchError((error) => {
        console.error('Erreur HTTP:', error);
        throw error;
      })
    );
  }


  createEncadrant(user: User): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, user);
    }
}
