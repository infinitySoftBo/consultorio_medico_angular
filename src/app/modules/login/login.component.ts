import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const ok = this.auth.login(
      this.credentials.username,
      this.credentials.password
    );

    if (ok) {
      this.credentials = { username: '', password: '' };
      this.error = '';
      this.router.navigate(['/patients']);
    } else {
      this.error = 'Credenciales inválidas';
    }
  }
}
