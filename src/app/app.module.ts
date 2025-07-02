import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatieresReprendreComponent } from './components/matieres-reprendre/matieres-reprendre.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { ParcourrecommendeComponent } from './components/parcourrecommende/parcourrecommende.component';
import { ParcourchoisiComponent } from './components/parcourchoisi/parcourchoisi.component';
import { ProfilutilisateurComponent } from './components/profilutilisateur/profilutilisateur.component';
import { ModificationmotdepassComponent } from './components/modificationmotdepass/modificationmotdepass.component';
import { ModificationprofilComponent } from './components/modificationprofil/modificationprofil.component';
import { TestdeconnaissanceComponent } from './components/testdeconnaissance/testdeconnaissance.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { ResourcepedagogiqueComponent } from './components/resourcepedagogique/resourcepedagogique.component';
import { SequencesComponent } from './components/sequences/sequences.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardEnseignantComponent } from './Enseignant/dashboard-enseignant/dashboard-enseignant.component';
import { EtudiantsComponent } from './Enseignant/etudiants/etudiants.component';
import { CoursComponent } from './Enseignant/cours/cours.component';
import { ProfilComponent } from './Enseignant/profil/profil.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReponsableFormationInterfaceComponent } from './reponsable-formation-interface/reponsable-formation-interface.component';
import { DashbordComponent } from './ResponsableFormation/dashbord/dashbord.component';
import { OffreformationComponent } from './ResponsableFormation/offreformation/offreformation.component';
import { StatistiqueComponent } from './ResponsableFormation/statistique/statistique.component';
import { PromotionsComponent } from './ResponsableFormation/promotions/promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    UserListComponent,
    FooterComponent,
    MatieresReprendreComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    SyllabusComponent,
    TestsListComponent,
    RecommendationComponent,
    ParcourrecommendeComponent,
    ParcourchoisiComponent,
    ProfilutilisateurComponent,
    ModificationmotdepassComponent,
    ModificationprofilComponent,
    TestdeconnaissanceComponent,
    ResultatsComponent,
    ResourcepedagogiqueComponent,
    SequencesComponent,
    ActivitesComponent,
    EvaluationsComponent,
    DashboardEnseignantComponent,
    EtudiantsComponent,
    CoursComponent,
    ProfilComponent,
    ReponsableFormationInterfaceComponent,
    DashbordComponent,
    OffreformationComponent,
    StatistiqueComponent,
    PromotionsComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
