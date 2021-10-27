import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(private db: DatabaseService, 
    private fb: AngularFireDatabase) { }

  editando: boolean = false;
  avatar: string = '';
  seguidores: string = '';
  siguiendo: string = '';
  bio: string = '';
  posts = [];

  //publicacionesUsuario : Observable<any[]>;

  

  getPublicacionesUsuario() {
   var publicacionesUsuario = this.db.getUsuario();
   console.log(publicacionesUsuario);
  }

  getPerfilUsuario() {
   // this.publicacionesUsuario = this.db.getUsuario();

  
  }

  ngOnInit() {
    this.getPublicacionesUsuario();

    this.getPerfilUsuario();

    
  }

  toggleEditar() {
    this.editando = !this.editando;
  }

}