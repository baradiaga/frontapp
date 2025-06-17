import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UtilisateurListComponent } from './pages/utilisateur-list/utilisateur-list.component';
import { UtilisateurFormComponent } from './pages/utilisateur-form/utilisateur-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UtilisateurListComponent,
    UtilisateurFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
