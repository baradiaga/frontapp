
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// @ts-ignore
import { ResponsableRoutingModule } from './responsable-routing.module';
// @ts-ignore
import { DashboardComponent } from './dashboard/dashboard.component';
// @ts-ignore
import { ProfilComponent } from './profil/profil.component';
// @ts-ignore
import { StatistiquesComponent } from './statistiques/statistiques.component';
// @ts-ignore
import { OffreFormationComponent } from './offre-formation/offre-formation.component';
import {PromotionsComponent} from "./promotions/promotions.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ProfilComponent,
    StatistiquesComponent,
    OffreFormationComponent,
    PromotionsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ResponsableRoutingModule
  ]

})
export class ResponsableFormationModuleTsModule { }
