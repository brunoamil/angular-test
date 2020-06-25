import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const API = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private TokenService: TokenService) { }

  authenticate(userName: string, password: string) {
      return this.http
            .post(API + '/user/login', { userName, password}, { observe: 'response'})
            .pipe(tap(res => {
               const authToken = res.headers.get('x-access-token');
               this.TokenService.setToken(authToken);
               //window.localStorage.setItem('authToken', authToken);
               console.log(`Usuário ${userName} autenticado com o token ${authToken}`);
            }))
  }
}
