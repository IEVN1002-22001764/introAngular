
 import { Component, signal } from '@angular/core';
 
@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //  protected readonly title = signal('introAngular');
 
  titulo: string = 'Mar Morales'; //usamos una interpolacion del app.html
  duplicaNumero(num: number): number {
    //creamos la funcion que nos dara un numero
    return num * 2;
  }
 
  pelicula = {
    titulo: 'El padrino',
    anio: 1972,
    genero: 'Drama',
    fechaLanzamiento: new Date(),
    precio: 375,
  };
}