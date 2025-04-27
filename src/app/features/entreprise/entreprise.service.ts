import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Entreprise } from './entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiUrl = 'http://192.168.1.32:3000/api/users/entreprises';
  // private apiUrl = 'http://localhost:3000/api/users/entreprises';

  constructor(private http: HttpClient) {}

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl);
  }
}
