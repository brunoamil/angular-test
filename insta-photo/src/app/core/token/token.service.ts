import { Injectable } from "@angular/core";


const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    //retorna true ou false se existe 
    hasToken() {
        return !!this.getToken();
    }
    //recebe o token pra guardar
    setToken(token){
        window.localStorage.setItem(KEY, token)
    }
    // retorna o token
    getToken(){
        return window.localStorage.getItem(KEY);
    }
    //remove o token
    removeToken(){
        window.localStorage.removeItem(KEY);
    }

}