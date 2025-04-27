import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {

  private apiUrl = 'http://192.168.1.32:3000/api/entretiens';

  constructor(private http: HttpClient) {}

  // Créer un entretien
  // createEntretien(entretienData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}`, entretienData);
  // }

  createEntretien(entretienData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}`, entretienData, { headers });
  }


  // Mettre à jour un entretien
  updateEntretien(id: number, entretienData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, entretienData);
  }

  // Supprimer un entretien
  deleteEntretien(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Lister tous les entretiens
  getAllEntretiens(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un entretien par ID
  getEntretienById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Récupérer les entretiens par ID de candidature
  getEntretiensByCandidature(candidatureId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/candidature/${candidatureId}`);
  }

  // createEntretien(data: any): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.post(this.apiUrl, data, { headers });
  // }

  // getEntretiens(): Observable<any[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.get<any[]>(this.apiUrl, { headers });
  // }
}

