import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, throwError } from 'rxjs';

@Injectable()
export class miServicio {
    constructor(private http: HttpClient) {

    }

    configUrl = 'https://instaclone-3059b-default-rtdb.firebaseio.com/'; // /publicaciones.json
    // /usuario.json

    getConfig() {
        //return this.http.get<Config>(this.configUrl)
    }
}