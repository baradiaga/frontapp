import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilutilisateur',
  templateUrl: './profilutilisateur.component.html',
  styleUrls: ['./profilutilisateur.component.css']  
})
export class ProfilutilisateurComponent implements OnInit {  
  user = {
    nom: 'Diaga',
    prenom: 'Bara',
    email: 'bara@example.com',
    role: 'Étudiant'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onEdit() {
    this.router.navigate(['/Modificationprofil']);
  }
}
