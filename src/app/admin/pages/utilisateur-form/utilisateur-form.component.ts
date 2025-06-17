// utilisateur-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from './../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html'
})
export class UtilisateurFormComponent implements OnInit {
  utilisateur: any = {
    nom: '',
    prenom: '',
    role: '',
    profil: ''
  };
  modeEdition = false;

  constructor(
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modeEdition = true;
      this.utilisateurService.getById(id).subscribe(data => this.utilisateur = data);
    }
  }

  enregistrer(): void {
    if (this.modeEdition) {
      this.utilisateurService.update(this.utilisateur).subscribe(() => this.router.navigate(['/admin/utilisateurs']));
    } else {
      this.utilisateurService.create(this.utilisateur).subscribe(() => this.router.navigate(['/admin/utilisateurs']));
    }
  }
}
