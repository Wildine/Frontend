import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://192.168.1.32:3000/api/evaluations';

  constructor(private http: HttpClient) {}

  // getAllEvaluations() {
  //   return this.http.get<any>(this.apiUrl);
  // }

  getAllEvaluations(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token non trouvé');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  createEvaluation(evaluationData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiUrl, evaluationData, { headers });
  }



}
