import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';
import { CoursComponent } from './cours/cours.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { ProfilComponent } from './profil/profil.component';
const routes: Routes = [
    //pour Enseignant
       { path: 'enseignant/dashboard-enseignant', component: DashboardEnseignantComponent },
    { path: 'enseignant/cours', component: CoursComponent },
    { path: 'enseignant/etudiants', component:EtudiantsComponent },
    { path: 'enseignant/evaluations', component: EvaluationsComponent },
    
    { path: 'enseignant/profil', component: ProfilComponent },
     { path: '', redirectTo: 'dashboard-enseignant', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
