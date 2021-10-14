import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {map} from "rxjs/operators";
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  @Input() posts: any[];
 
  toggleLike(): void {
    
    //Agregar en Firebase propiedad Liked (boolean) para hacer un request con PUT y editar
    console.log("clicked! ");
  }

  constructor(private http: HttpClient) { }

  obtenerPublicaciones() : void {
    this.http.get('https://instaclone-73f6e-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map(responseData => {
        //regresar un arreglo de Posts
        const publicacionesArray = [];
        for(const key in responseData) {
          publicacionesArray.push({ ...responseData[key], key});         
        } return publicacionesArray;
      })
      )
      .subscribe(responseData => {
        console.log(responseData);
      })
    }
    crearPublicacion(postData: { id: number; descripcionPost: String; usuario: String}) {
      this.http.post('https://instaclone-73f6e-default-rtdb.firebaseio.com/publicaciones/posts.json', 
      postData)
      
      .subscribe(responseData => {
        //responseBoty
        console.log(responseData);
      })
    }
    borrarDatos() {
      return this.http.delete('https://instaclone-73f6e-default-rtdb.firebaseio.com/posts.json')
      .subscribe(() => {
        console.log("se borro todo");
      })
    }
  ngOnInit() {
    //console.log(this.posts);
  }

  

}
