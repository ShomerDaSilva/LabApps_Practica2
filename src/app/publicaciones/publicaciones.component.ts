import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { PopupPublicacionComponent } from '../popup-publicacion/popup-publicacion.component';

//Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireStorage } from '@angular/fire/compat/storage';


//Services
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})


export class PublicacionesComponent implements OnInit {

  
  
  @Input() posts: any[];
  
  toggleLike(post, parametro): void {
    
    //this.actualizaEnBD(post, parametro);
    //Agregar en Firebase propiedad Liked (boolean) para hacer un request con PUT y editar
    console.log("clicked! ");
    
    this.actualizarLike(post, parametro);
  }
  
  infoTest: any = {
    usuario: "luzdeleon",
    descripcionPost: "hola, mundo",
    urlImagen: "gs://instaclone-3059b.appspot.com/Post 3.jpg", 
    like: false
  }
  
  publicacionesArreglo = [];
  publicacionesLiked = [];
  
  constructor(private http: HttpClient,
    private popUpCtrl: PopoverController, 
    private db: AngularFirestore, 
    private store: AngularFireStorage, 
    private firebaseRequests : DatabaseService ) {  }
    
    cargarColleccion() {
      this.db.collection('publicaciones').snapshotChanges();
    }
    actualizarLike(id, like) {
      let nuevoLike = !like;
      if(like == undefined) {
        nuevoLike = true;
      }
      
      this.http.put('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones/'+ id+'/like.json', nuevoLike)
      .subscribe(responseData => {
        console.log(responseData);
        this.publicacionesArreglo = [];
        this.obtenerPublicaciones();
      })
    }
    
    recargarDatos(params: any): void {

      
      if(params != '') {
        this.publicacionesArreglo.push(params);
        this.publicacionesArreglo = this.publicacionesArreglo.reverse();
      }else {
        this.publicacionesArreglo = [];
      }
    }
    
    obtenerPublicaciones(): void {
       this.firebaseRequests.getPublicaciones().subscribe(
         res => {
           console.log(res);
           this.publicacionesArreglo = res.reverse();
         }
       )
      }
      
      crearPublicacion(infoPublicacion: { usuario: String; descripcionPost: String; urlImagen: String}): void {
        this.firebaseRequests.postPublicacion(infoPublicacion).subscribe(res => {
          let params = Object.assign(res, this.infoTest);

          console.log(params);
          this.recargarDatos(params);
        })
        
      }
      
      eliminarPublicaciones(): void {
       
        this.firebaseRequests.deleteAllPublicaciones().subscribe(res => {
          console.log("se elimino todo");

          this.recargarDatos('');
        })
      }
      
      borrarPost(idPublicacion) {
        console.log(idPublicacion);
        this.firebaseRequests.deletePublicacion(idPublicacion).subscribe(res => {
          //this.recargarDatos();
        })
      }
      
      escribirComentario(elementoFocus) {
        
        //busca elemento en Ionic por ID
        let buscarInput = document.getElementById('comment-'+elementoFocus);
        
        //encuentra elemento input
        let campoTextoFocus = buscarInput.querySelector('input');
        
        campoTextoFocus.focus();
      }
      
      guardarPublicacion(id, guardado) {
        let toggleGuardado = !guardado;
        if(guardado == undefined) {
          toggleGuardado = true;
        }
        
        this.http.put('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones/'+ id+'/guardado.json', toggleGuardado)
        .subscribe(responseData => {
          console.log(responseData);
          this.publicacionesArreglo = [];
          this.obtenerPublicaciones();
        })
      }
      
      ngOnInit() {
        this.obtenerPublicaciones();
        
       
        
        this.cargarColleccion();
      }
      
      async mostrarPopUp() {
        const popUp = await this.popUpCtrl.create({
          component: PopupPublicacionComponent,
          translucent: true,
          showBackdrop: false ,
          mode: 'md',
          event: event
        })
        
        await popUp.present();
      }
      
    }