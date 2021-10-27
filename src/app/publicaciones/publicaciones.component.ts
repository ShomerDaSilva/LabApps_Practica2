import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { map } from 'rxjs/operators';

//import { DomSanitizer } from '@angular/platform-browser';
import { PopoverController } from '@ionic/angular';
import { PopupPublicacionComponent } from '../popup-publicacion/popup-publicacion.component';

//Firebase

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
    usuario: "ruffles",
    descripcionPost: "holaaaaaa",
    urlImagen: "gs://instaclone-3059b.appspot.com/Post 1.jpg", 
    like: false
  }

  publicacionesArreglo = [];
  publicacionesLiked = [];

    constructor(private http: HttpClient,
      private popUpCtrl: PopoverController) { }


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
      }else {
        this.publicacionesArreglo = [];
      }
    }
    
    obtenerPublicaciones(): void {
      this.http.get('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json')
      .pipe(
        map(responseData => {
          console.log(responseData);
          
          for(const key in responseData) {
            this.publicacionesArreglo.push( { ...responseData[key], key});
          } return this.publicacionesArreglo;
        })
      ).subscribe(responseData => {
        console.log(responseData);
      });
    }

    crearPublicacion(infoPublicacion: { usuario: String; descripcionPost: String; urlImagen: String}): void {
      this.http.post('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json', infoPublicacion)
      .subscribe(responseData => {
        console.log(responseData);

        let params = Object.assign(responseData, this.infoTest);

        console.log(params);

        this.recargarDatos(params);
      })

      
    }

    eliminarPublicaciones(): void {
      this.http.delete('https://instaclone-3059b-default-rtdb.firebaseio.com/publicaciones.json')
      .subscribe(() => {
        console.log("Se eliminaron todas las publicaciones");
        
        this.recargarDatos('');
      })
    }

   
    //Modificar Ruta haciendo concat
    urlImagen(imagen: any) {
      
      //return this.sanitizer.bypassSecurityTrustUrl(imagen);
      //https://firebasestorage.googleapis.com/v0/b/
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