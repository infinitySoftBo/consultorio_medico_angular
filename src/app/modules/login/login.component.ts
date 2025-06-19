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

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials.username, this.credentials.password);
    this.credentials = { username: '', password: '' };
    this.router.navigate(['/patients']);
  }
}
