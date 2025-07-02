import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    // DashboardEnseignantComponent,
  ]
})
export class EnseignantModule { }
