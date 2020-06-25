import { Injectable } from "@angular/core";

const KEY = 'auth'
@Injectable({ providedIn: 'root'})

export class TokenService {

    //verifica se tem token
    hasToken(){
        return !!this.getToken();
    }
    //seta o token no storage
    setToken(token){
        window.localStorage.setItem(KEY, token);
    }
    //pega o token
    getToken(){
        return window.localStorage.getItem(KEY);
    }

    //remove token
    removeToken(){  
        window.localStorage.removeItem(KEY);
    }
}