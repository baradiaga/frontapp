import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matieres-reprendre',
  templateUrl: './matieres-reprendre.component.html',
  styleUrls: ['./matieres-reprendre.component.css']
})
export class MatieresReprendreComponent implements OnInit {

  matieres = [
    { id : 1,
      nom: 'Mathématiques',
      ordre: 1,
      ec: 'Algèbre Linéaire',
      coefficient: 3,
      slug: 'maths-algebre-lineaire',
      statut: 'À reprendre'
    },
    { id:2,
      nom: 'Physique',
      ordre: 2,
      ec: 'Mécanique',
      coefficient: 2,
      slug: 'physique-mecanique',
      statut: 'À reprendre'
    },
    { id:3,
      nom: 'Informatique',
      ordre: 3,
      ec: 'Structures de données',
      coefficient: 4,
      slug: 'info-structures-donnees',
      statut: 'À reprendre'
    },
    { id:3,
      nom: 'FRANCAIS',
      ordre: 3,
      ec: 'Structures de données',
      coefficient: 4,
      slug: 'info-structures-donnees',
      statut: 'À reprendre'
    }
  ];
searchTerm: any;

  constructor() {}

  

   filteredMatieres: { id: number; nom: string; ordre: number; ec: string; coefficient: number; slug: string; statut: string; }[] = [];

  ngOnInit(): void {
   // this.filteredMatieres = this.matieres;
  }

 /* filterMatieres(): void {
    const term = this.searchTerm ? this.searchTerm.toLowerCase() : '';
    this.filteredMatieres = this.matieres.filter(m =>
      m.nom.toLowerCase().includes(term) ||
      m.ec.toLowerCase().includes(term) ||
      m.statut.toLowerCase().includes(term)
    );
  }
  */
}
