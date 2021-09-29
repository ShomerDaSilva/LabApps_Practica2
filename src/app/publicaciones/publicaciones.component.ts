import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit, OnChanges {

  @Input() posts: any[];
  @Input() postB: any;

  constructor() { }

  

  opPostLiked(like: boolean): void{
    console.log(like + " me gusta!");


  }
  ngOnInit() {
    console.log(this.posts);
  }

  ngOnChanges(){
    console.log(this.postB)
  }

}
