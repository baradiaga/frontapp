import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
   profil = {
    nom: 'Professeur Mbaye',
    email: 'prof.mbaye@ecole.sn',
    matieres: ['Mathématiques', 'Informatique']
  };

}
