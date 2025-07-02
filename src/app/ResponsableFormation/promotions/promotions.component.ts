import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {
  promotions: string[] = [];
  nouvellePromo = '';

  ajouterPromo() {
    if (this.nouvellePromo.trim()) {
      this.promotions.push(this.nouvellePromo.trim());
      this.nouvellePromo = '';
    }
  }

}
