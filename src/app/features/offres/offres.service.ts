import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offres } from '../../core/models/offres.model';
import { AuthService } from '../../core/services/auth.service';

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

  getOffresByEntreprise(id: number): Observable<Offres[]> {
    return this.http.get<Offres[]>(`${this.apiUrl}/${id}`);
  }

  createOffre(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(this.apiUrl, data, { headers });
  }
}
