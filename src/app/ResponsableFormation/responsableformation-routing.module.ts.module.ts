
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { DashboardComponent } from './dashboard/dashboard.component';
// @ts-ignore
import { ProfilComponent } from './profil/profil.component';
// @ts-ignore
import { StatistiquesComponent } from './statistiques/statistiques.component';
// @ts-ignore
import { OffreFormationComponent } from './offre-formation/offre-formation.component';
// @ts-ignore
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'offres', component: OffreFormationComponent },
  { path: 'promos', component: PromotionsComponent }
];



@NgModule({
  declarations: [],
  imports: [
    NgModule,
    RouterModule.forChild(routes),
    CommonModule,

  ],
  exports: [RouterModule]
})
export class ResponsableformationRoutingModuleTsModule { }
