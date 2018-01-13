import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
    styleUrls: [ './fruta.component.css']    
  })

  export class FrutaComponent {
    public nombre_component = 'Componete fruta';
    public listado_frutas = 'Manzana, pera,uva,';

    public nombre:string;
    public edad:number;
    public mayoredad:boolean;
    public trabajos:Array<any> = ['A',22,'C'];
    comodin:any;

    constructor(){
      this.nombre = 'Ian';
      this.edad = 18;
      this.mayoredad = true;
      this.comodin = 'SI';     

    }
    ngOnInit(){       
      this.cambiarnombre();
      this.cambiaredad(14);
      alert(this.nombre + " " + this.edad);

      //Variables y Alcances
      var uno = 8;
      var dos = 23;

      if(uno === 8){
        let uno = 3;
        let dos = 88;
        console.log("Dentro del IF: " + uno+" "+dos);
      }
      console.log("Fuera del IF: " + uno+" "+dos);

    }

    cambiarnombre(){
      this.nombre = 'Thiago';
    }
    cambiaredad(edad){
      this.edad = edad;
    }
  }
  

