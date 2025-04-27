import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://192.168.1.32:3000/api/dashboard';

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return { Authorization: `Bearer ${token}` };
  }

  getDashboardEntreprise(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/entreprise`, {
      headers: this.getAuthHeaders()
    });
  }

  getDashboardEtudiant(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/etudiant`, {
      headers: this.getAuthHeaders()
    });
  }

  getDashboardEncadrant(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/encadrant`, {
      headers: this.getAuthHeaders()
    });
  }

  getDashboardDemandeEmploi(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandeEmploi`, {
      headers: this.getAuthHeaders()
    });
  }
}
