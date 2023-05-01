import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  heroes : string []=['Spiderman','Iroman','Hilk','Thor','Capitan America'];
  heroeBorrado: string | undefined = '';
  
  borrarHeroes(){
     this.heroeBorrado = this.heroes.shift() || '';
    
  }


}
