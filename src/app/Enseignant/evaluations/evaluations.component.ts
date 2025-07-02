import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.css'
})
export class EvaluationsComponent {
   evaluations = [
    { titre: 'test 1', matiere: 'Mathématiques', dateLimite: '20 juin 2025' },
    { titre: 'test  2', matiere: 'Physique', dateLimite: '30 juin 2025' },
  ];

}
