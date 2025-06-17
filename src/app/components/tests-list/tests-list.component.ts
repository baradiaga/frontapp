import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../services/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  chapitreId!: number;
  questions: Question[] = [];
  displayedQuestions: Question[] = [];

  page = 1;
  pageSize = 5;
  totalPages = 1;

  reponses: { [questionId: number]: number } = {};

  allTestsMock: { [key: string]: Question[] } = {
    "1": Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      question: `Question ${i + 1} du Chapitre 1 ?`,
      options: ["Option A", "Option B", "Option C"],
      correctAnswer: Math.floor(Math.random() * 3)
    })),
    "2": Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      question: `Question ${i + 1} du Chapitre 2 ?`,
      options: ["Réponse 1", "Réponse 2", "Réponse 3"],
      correctAnswer: Math.floor(Math.random() * 3)
    })),
    "3": Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      question: `Question ${i + 1} du Chapitre 3 ?`,
      options: ["Choix 1", "Choix 2", "Choix 3"],
      correctAnswer: Math.floor(Math.random() * 3)
    }))
  };

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.chapitreId = Number(this.route.snapshot.paramMap.get('chapitreId'));
    this.questions = this.allTestsMock[this.chapitreId.toString()] || [];
    this.totalPages = Math.ceil(this.questions.length / this.pageSize);
    this.updateDisplayedQuestions();
  }

  updateDisplayedQuestions() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedQuestions = this.questions.slice(startIndex, endIndex);
  }

  choisirReponse(questionId: number, reponseIndex: number) {
    this.reponses[questionId] = reponseIndex;
  }

  validerTest() {
    let score = 0;
    for (let q of this.questions) {
      if (this.reponses[q.id] === q.correctAnswer) {
        score++;
      }
    }
    this.router.navigate(['/recommendation'], {
      queryParams: { score: score, chapitreId: this.chapitreId }
    });
  }

  suivant() {
  if (!this.toutesLesReponsesFournies()) {
    alert("Veuillez répondre à toutes les questions avant de continuer.");
    return;
  }

  if (this.page < this.totalPages) {
    this.page++;
    this.updateDisplayedQuestions();
  }
}


  precedent() {
    if (this.page > 1) {
      this.page--;
      this.updateDisplayedQuestions();
    }
  }
 toutesLesReponsesGlobalesFournies(): boolean {
  return this.questions.every(q => this.reponses[q.id] !== undefined);
}
  toutesLesReponsesFournies(): boolean {
    return this.displayedQuestions.every(q => this.reponses[q.id] !== undefined);
  }

}
