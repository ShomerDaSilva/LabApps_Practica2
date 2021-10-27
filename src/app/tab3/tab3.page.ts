import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import datosUsuario from '../../feed.json';

import {map} from 'rxjs/operators';
//import { ThrowStmt } from '@angular/compiler';
import { DatabaseService } from '../database.service';


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
    this.firebaseRequests.getPublicaciones().subscribe(res => {
      this.publicaciones = res;
    })
    
  }

  agregarAusuario(params): void {
   
  }

  agregarPublicacion(infoPublicacion: { usuario: string, descripcionPost: String, urlImagen: string}): void {
    this.firebaseRequests.postPublicacion(infoPublicacion).subscribe(res => {
      let params = Object.assign(res, this.infoTest);
      console.log(params);
    })
  }

  toggleFollow(): void {
    this.siguiendo = !this.siguiendo;
  }

  ngOnInit() {
    this.obtenerPublicaciones();
  }

  constructor(
    private http: HttpClient, //se puede eliminar una vez que sustituyamos todo por el service
    private firebaseRequests: DatabaseService) {}

}