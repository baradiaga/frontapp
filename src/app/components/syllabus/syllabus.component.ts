import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Chapitre {
  numero: number;
  nom: string;
  resultat?: string;
  categorie: string;
}

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  slug: string | null = null;
  chapitres: Chapitre[] = [
    { numero: 1, nom: 'Introduction', categorie: 'Théorie' },
    { numero: 2, nom: 'Notions de base', categorie: 'Exercices' },
    { numero: 3, nom: 'Applications', categorie: 'Projet' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    // Tu peux charger dynamiquement les chapitres ici
  }

  lancerTest(chapitre: Chapitre) {
    const chapitreId = chapitre.numero; // ou autre identifiant
    this.router.navigate(['/tests', chapitreId]);
  }

  modifierChapitre(chapitre: Chapitre) {
    alert(`Modifier le chapitre ${chapitre.numero} - ${chapitre.nom}`);
  }
}
