import { Component } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
  cours = [
    { titre: 'Mathématiques', description: 'Cours de base sur les équations.' },
    { titre: 'Web Design', description: 'Introduction au web et au design.' },
    { titre: 'Informatique', description: 'Structures de données et algorithmes.' },
  ];
  
  nouveauCours = { titre: '', description: '' };

  ajouterCours() {
    if (this.nouveauCours.titre && this.nouveauCours.description) {
      this.cours.push({ ...this.nouveauCours });
      this.nouveauCours = { titre: '', description: '' };
    }
  }

  supprimerCours(index: number) {
    this.cours.splice(index, 1);
  }

}
