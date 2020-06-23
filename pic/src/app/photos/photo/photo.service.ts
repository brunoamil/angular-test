import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})

export class PhotoService {

    constructor(private http: HttpClient){

    }

    listFromUser(userName: string) {
        const listaDeFotos = this.http.get<Photo[]>(API + '/' + userName + '/photos');
        
        return listaDeFotos;
    
    }
}