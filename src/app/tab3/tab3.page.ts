import { Component } from '@angular/core';
import datosUsuario from '../../feed.json';
interface Usuario{
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

export class Tab3Page {

  usuario: Usuario = datosUsuario.usuario;

  constructor() {}

}
