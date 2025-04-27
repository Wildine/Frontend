import { Injectable } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {
  private apiUrl = 'http://192.168.1.32:3000/api/candidatures';

  constructor(private http: HttpClient) { }
  // constructor(private http: HttpClient, private authService: AuthService) { }
  candidatures: any[] = [];

  // Récupérer toutes les candidatures
  getAllCandidatures(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer une candidature par ID
  getCandidatureById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getCandidaturesByEntreprise(entrepriseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/entreprise/${entrepriseId}/candidatures`);
  }

  getDashboardEntreprise(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard/entreprise`);
  }

  getDashboardEtudiant(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard/etudiant`);
  }

  getCandidaturesEnAttenteByEntreprise(entrepriseId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/entreprise/${entrepriseId}`, { headers });
  }

  ngOnInit(): void {
    this.http.get<any[]>(`${this.apiUrl}`)
      .subscribe(data => {
        this.candidatures = data;
      });
  }

  // updateStatut(id: number, statut: string): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, { statut });
  // }

  accepterCandidature(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/acceptees/${id}`, { statut: 'accepte' });
  }

  rejeterCandidature(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/rejetes/${id}`, { statut: 'rejete' });
  }

  // getCandidaturesAcceptees(entrepriseId: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/acceptes/${entrepriseId}`);
  // }

  // getCandidaturesAcceptees(entrepriseId: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/acceptees/${entrepriseId}`);
  // }

  // getCandidaturesAcceptees(entrepriseId: number) {
  //   return this.http.get<{ totalCandidaturesAcceptees: number }>(`/acceptees/${entrepriseId}`);
  // }

  // getCandidaturesRejetees(entrepriseId: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/rejetees/${entrepriseId}`);
  // }

  getCandidaturesAcceptees(entrepriseId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/acceptees/${entrepriseId}`, { headers });
  }

  getCandidaturesRejetees(entrepriseId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/rejetes/${entrepriseId}`, { headers });
  }



  postuler(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/postuler`, data, { headers });
  }

  // postuler(data: any, role: string): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   const url = role === 'etudiant'
  //     ? `${this.apiUrl}/postuler/etudiant`
  //     : `${this.apiUrl}/postuler/demandeur`;
  //   return this.http.post(url, data, { headers });
  // }

  // postulerEtudiant(data: any): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.post(`${this.apiUrl}/postuler/etudiant`, data, { headers });
  // }

  // // Méthode pour les demandeurs d'emploi
  // postulerDemandeur(data: any): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.post(`${this.apiUrl}/postuler/demandeur`, data, { headers });
  // }

  // getCandidaturesByUser(userId: number) {
  //   return this.http.get<any[]>(`${this.apiUrl}${userId}`);
  // }

  // postuler(offreId: number) {
  //   return this.http.post(this.apiUrl, {
  //     offreId,
  //     userId: this.authService.getUserId()
  //   });
  // }

  // postuler(userId: number, offreId: number) {
  //   return this.http.post(`${this.apiUrl}/postuler`, { userId, offreId });
  // }

  // getByUser(userId: number) {
  //   return this.http.get(`${this.apiUrl}/user/${userId}`);
  // }

  // getByOffre(offreId: number) {
  //   return this.http.get(`${this.apiUrl}/offre/${offreId}`);
  // }

  // updateStatut(id: number, statut: string) {
  //   return this.http.put(`${this.apiUrl}/${id}`, { statut });
  // }

  // delete(id: number) {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
