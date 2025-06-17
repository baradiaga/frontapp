// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { authGuard } from './auth.guard';
import { MatieresReprendreComponent } from './components/matieres-reprendre/matieres-reprendre.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilutilisateurComponent } from './components/profilutilisateur/profilutilisateur.component';
import { ModificationmotdepassComponent } from './components/modificationmotdepass/modificationmotdepass.component';
import { ModificationprofilComponent } from './components/modificationprofil/modificationprofil.component';
import { ParcourrecommendeComponent } from './components/parcourrecommende/parcourrecommende.component';
import { ParcourchoisiComponent } from './components/parcourchoisi/parcourchoisi.component';
const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    // canActivate: [authGuard],
    children: [
      { path: 'matieres', component: MatieresReprendreComponent },
      { path: 'matieres/:slug', component: SyllabusComponent },
      { path: 'tests', component: TestsListComponent },
      { path: 'tests/:chapitreId', component: TestsListComponent },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'Profilutilisateur', component: ProfilutilisateurComponent},
      {path: 'Modificationmotdepass', component : ModificationmotdepassComponent},
      {path: 'Modificationprofil', component : ModificationprofilComponent},
      

      {path: 'Parcourrecommende', component: ParcourrecommendeComponent},
      {path: 'Parcourchoisi', component: ParcourchoisiComponent},
      { path: '', redirectTo: 'matieres', pathMatch: 'full' },
      {
  path: 'recommendation', component: RecommendationComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
