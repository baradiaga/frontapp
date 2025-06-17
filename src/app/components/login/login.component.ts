import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const success = this.authService.login(this.email, this.password);
    if (success) {
     this.router.navigate(['/matieres']);
    } else {
      this.error = 'Email ou mot de passe incorrect';
    }
  }
}
