import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import datosUsuario from '../../feed.json';

import {map} from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


interface Usuario {
  nombre: String;
  seguidores: number;
  siguiendo: number; 
  posts: number;
  bio: String;
  avatar: String;
  publicaciones: Array<String>;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page  implements OnInit {

  usuario: Usuario = datosUsuario.usuario;

  siguiendo: boolean = true;

  publicacionesUsuario: any;

  publicaciones: any = [];

  //generar un filtro de publicaciones aqui

  infoTest: any = {
    usuario: this.usuario.nombre,
    descripcionPost: "hello",
    urlImagen: "gs://instaclone-3059b.appspot.com/Post 2.jpg"
  }


  loadData(params : any) {
    this.publicaciones = params;
  }
  obtenerPublicaciones() : void {
    this.http.get('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(responseData => {
        
        for(const key in responseData) {
          this.publicaciones.push({ ...responseData[key], key});
        } return this.publicaciones;
      })
    ).subscribe(responseData => {
      console.log(responseData);
     })
    
  }

  agregarAusuario(params): void {
    this.http.post('https://instaclone-3059b-default-rtdb.firebaseio.com/usuario/publicaciones.json', params).subscribe(
      responseData => {
        console.log(responseData);

        this.obtenerPublicaciones();
      }
    )
  }

  agregarPublicacion(infoPublicacion :{ usuario: string, descripcionPost: String, urlImagen: string}): void {
    this.http.post('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json', infoPublicacion).subscribe(responseData => {
      console.log(responseData);
    }); 
  }

  toggleFollow(): void {
    this.siguiendo = !this.siguiendo;
  }

  ngOnInit() {
    this.obtenerPublicaciones();
  }

  constructor(private http: HttpClient) {}

}