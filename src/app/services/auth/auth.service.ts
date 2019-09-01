import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageCookieService } from '@services/cookie/storage-cookie.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUserData = new BehaviorSubject(null); // next push data on pipeline
  loginUser = this.loginUserData.asObservable(); // suscribe data

  constructor(private jwtHelper: JwtHelperService,

    private cookie: StorageCookieService,
    private router: Router) {

    const user = this.getUser();
    if (user) {
      this.emit(user);
    }

  }

  /**
   * Watch user login
   */
  emit(data) {
    this.loginUserData.next(data);
  }



  isTokenValid(token) {
    if (!token) {
      return false;
    }
    return this.jwtHelper.isTokenExpired(token);
  }

  isAuthenticated(): boolean {
    const token = this.cookie.getCookie('user');
    if (token) {
      return !this.isTokenValid(token);
    }
    return false;
  }


  setUser(token) {
    if (token) {
      this.cookie.setCookie(token, 'user');
      this.emit(this.getUser());
    }
  }

  decodeToken(token) {
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return false;
  }
  setPrivateKey(pkey) {

    if (pkey) {
      this.cookie.setCookie(pkey, 'autherization');
    }
  }

  getPrivateKey() {
    const userDetail = this.getUser();
    return `&%@)${userDetail['token']}${userDetail._id}*^$`;
  }

  getUser() {
    const token = this.cookie.getCookie('user');
    if (token) {
      const userdata = this.jwtHelper.decodeToken(token);

      return userdata['auth'];
    }
    return false;
  }


  getToken() {
    return this.cookie.getCookie('user') || null;
  }

  setStorage(key, data) {
    if (data) {
      this.cookie.setCookie(data, key);
    }
  }

  getStorage(key) {
    if (key) {
      return this.cookie.getCookie(key);
    } else {
      return false;
    }
  }

  removeUser() {

    this.cookie.removeCookie(['user', 'autherization']);
    // this.cookie.removeAll();
    this.emit(null);
    this.router.navigate(['/']);
  }


  setCookie(key, data) {
    this.cookie.setCookie(data, key);
  }

  getCookie(key) {
    this.cookie.getCookie(key);
  }

  setCookies(key, data) {
    this.cookie.setCookies(data, key);
  }

  getCookies(key) {
    this.cookie.getCookies(key);
  }
}

