import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Chapitre {
  numero: number;
  nom: string;
}

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  chapitreId!: number;

  // Simuler les chapitres disponibles
  tousLesChapitres: Chapitre[] = [
    { numero: 1, nom: 'Introduction' },
    { numero: 2, nom: 'Bases' },
    { numero: 3, nom: 'Approfondissement' },
    { numero: 4, nom: 'Exercices' },
    // ... autres chapitres
  ];

  // Chapitres recommandés automatiquement par le système
  chapitresRecommandees: Chapitre[] = [];

  // Chapitres choisis manuellement par l'utilisateur
  chapitresChoisisManuel: number[] = [];

  // Indique si un choix est validé (manuel ou auto)
  choixValide: boolean = false;

  // Source du choix validé ('manuel' ou 'auto')
  choixSource: 'manuel' | 'auto' | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.chapitreId = Number(this.route.snapshot.queryParamMap.get('chapitreId')) || 1;

    // Simuler la récupération des chapitres recommandés (à remplacer par ton vrai backend)
    this.chapitresRecommandees = [
      { numero: 2, nom: 'Bases' },
      { numero: 4, nom: 'Exercices' }
    ];
  }

  toggleChapitreManuel(numero: number, event: Event) {
  const input = event.target as HTMLInputElement | null;
  if (!input) return;
  const checked = input.checked;

  if (checked) {
    // ajouter chapitre
    if (!this.chapitresChoisisManuel.includes(numero)) {
      this.chapitresChoisisManuel.push(numero);
    }
  } else {
    // retirer chapitre
    this.chapitresChoisisManuel = this.chapitresChoisisManuel.filter(n => n !== numero);
  }
}


  validerChoixManuel() {
    if (this.chapitresChoisisManuel.length === 0) return;
    this.choixValide = true;
    this.choixSource = 'manuel';
  }

  validerChoixAuto() {
    this.choixValide = true;
    this.choixSource = 'auto';
  }
}
