import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurListComponent } from './pages/utilisateur-list/utilisateur-list.component';
import { UtilisateurFormComponent } from './pages/utilisateur-form/utilisateur-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'utilisateurs', pathMatch: 'full' },
  { path: 'utilisateurs', component: UtilisateurListComponent },
  { path: 'utilisateurs/ajouter', component: UtilisateurFormComponent },
  { path: 'utilisateurs/modifier/:id', component: UtilisateurFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }