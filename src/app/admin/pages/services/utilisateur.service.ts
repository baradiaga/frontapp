// utilisateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilisateurService {
  private apiUrl = '/api/utilisateurs'; // À adapter selon ton backend

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(utilisateur: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, utilisateur);
  }

  update(utilisateur: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${utilisateur.id || utilisateur.identifiant}`, utilisateur);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
