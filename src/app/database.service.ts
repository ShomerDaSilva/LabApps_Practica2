import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import {AngularFireDatabase}  from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private http: HttpClient,
    private firebaseCollections: AngularFireDatabase,
    private fbstore : AngularFirestore
  ) { }

  publicaciones = [];
  perfilUsuario: any

  getPublicaciones()  {
    return this.http.get('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(responseData => {
        //console.log('request a traves de Servicio -- Done');
        
        
        for(const key in responseData) {
          this.publicaciones.push( { ...responseData[key], key});
        } return this.publicaciones;
      })
      )
  }
  
  postPublicacion(publicacionData) {
    return this.http.post('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json', publicacionData)
  }

  deleteAllPublicaciones() {
    return this.http.delete('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json'); 
  }

  deletePublicacion(id) {
    console.log("entrando");
    return this.http.delete('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones/' + id + '.json');
  }


  //Obtener Perfil
  getUsuario() {
     
      this.perfilUsuario = this.fbstore.collection('usuario').add({ nuevapropiedad: 'testData'})
      console.log(this.perfilUsuario);
      return this.perfilUsuario;
  }

}