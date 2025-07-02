import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-enseignant',
  templateUrl: './dashboard-enseignant.component.html',
  styleUrl: './dashboard-enseignant.component.css'
})
export class DashboardEnseignantComponent {
   stats = {
    cours: 4,
    etudiants: 120,
    evaluations: 5,
    dateProchainTest: '25 juin 2025'
  };

}
