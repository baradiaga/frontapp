import { Component } from '@angular/core';

@Component({
  selector: 'app-offreformation',
  templateUrl: './offreformation.component.html',
  styleUrl: './offreformation.component.css'
})
export class OffreformationComponent {
  offres: string[] = [];
  nouvelleOffre = '';

  ajouterOffre() {
    if (this.nouvelleOffre.trim()) {
      this.offres.push(this.nouvelleOffre.trim());
      this.nouvelleOffre = '';
    }
  }

}
