import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 title = 'Mar Morales';
  duplicaNumero(num:number):number{
    return num*2
  }
 
  pelicula={
    titulo: "El Padrino",
    anio:1972,
    genero:"Crimen/Drama",
    fechaLanzamiento:new Date(),
    precio:345
  }
}
 
 