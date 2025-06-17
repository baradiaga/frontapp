import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = 'http://localhost:8080/api/tests'; // URL de ton backend

  constructor(private http: HttpClient) {}

  getQuestionsByChapitre(chapitreId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/chapitre/${chapitreId}`);
  }
}
