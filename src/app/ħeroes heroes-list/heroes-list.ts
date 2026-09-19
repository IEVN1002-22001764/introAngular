import { Component } from "@angular/core";

@Component({
    selector: 'app-heroes-list',
    standalone: false,
    styleUrl: './heroes-list.css',
    templateUrl: './heroes-list.html',
})
export class HeroesList{
imagewidth: number=40;
imageMargin :number=2;
muestraImage: boolean=true;
listFilter:string='';

showImage():void{
    this.muestraImage=!this.muestraImage //invierte el valor
}
 
heroes:any[]=[
    {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

       {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

       {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

       {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

       {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

       {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

       {
    imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:'Bok',
    descripcion:'neni',
    race:'sayan',
    ki:'8777'
    },

     ]
    }

