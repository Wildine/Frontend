import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Offres } from '../../../../core/models/offres.model';

@Injectable({ providedIn: 'root' })
export class OffresService {
  private apiUrl = 'http://192.168.1.32:3000/api/offres';
  // private apiUrl = 'http://localhost:3000/api/offres';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllOffres(): Observable<Offres[]> {
    return this.http.get<Offres[]>(this.apiUrl);
  }

  getOffreById(id: number): Observable<Offres> {
    return this.http.get<Offres>(`${this.apiUrl}/${id}`);
  }

  // getOffresByEntreprise(id: number): Observable<Offres[]> {
  //   return this.http.get<Offres[]>(`${this.apiUrl}/${id}`);
  // }

  getOffresByEntreprise(id: number): Observable<Offres[]> {
    return this.http.get<Offres[]>(`${this.apiUrl}?entrepriseId=${id}`);
  }

  getOffresParEntreprise(entrepriseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/entreprise/${entrepriseId}`); // URL avec l'ID d'entreprise
  }



  // getOffresActives(): Observable<Offres[]> {
  //   return this.http.get<Offres[]>(`${this.apiUrl}/?statut=active`);
  // }

  getOffres(): Observable<Offres[]> {
    return this.http.get<Offres[]>(`${this.apiUrl}/?statut=active`);
  }

  // getOffres(): Observable<Offres[]> {
  //   return this.http.get<Offres[]>('URL_DE_TON_API');
  // }

  createOffre(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(this.apiUrl, data, { headers });
  }

  supprimerOffre(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  // postuler(data: any): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.post(`${this.apiUrl}/postuler`, data, { headers });
  // }
}
