import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activeMenu: number | null = null;

  toggleSubMenu(menuNumber: number) {
    if (this.activeMenu === menuNumber) {
      this.activeMenu = null; // Fermer le sous-menu si déjà ouvert
    } else {
      this.activeMenu = menuNumber; // Ouvrir le sous-menu correspondant
    }
  }
}
