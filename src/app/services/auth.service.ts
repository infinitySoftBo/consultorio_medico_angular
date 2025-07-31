import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _loggedIn = false;

  get isLoggedIn() {
    return this._loggedIn;
  }

  /**
   * Attempt to log in with the provided credentials.
   * For now it simply checks against a hard coded list of demo users.
   * Returns true on success and false otherwise.
   */
  login(username: string, password: string): boolean {
    const validUsers = [
      { username: 'admin', password: 'admin' },
      { username: 'doctor', password: 'demo' },
    ];

    const match = validUsers.find(
      u => u.username === username && u.password === password
    );

    this._loggedIn = !!match;
    return this._loggedIn;
  }

  logout() {
    this._loggedIn = false;
  }
}
