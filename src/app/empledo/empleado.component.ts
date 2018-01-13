import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    styleUrls: [ './empleado.component.css']    
  })

  export class EmpleadooComponent {
    public titulo = 'Componete Empleado';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public traba_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
      this.empleado = new Empleado('Ian', 1,'Hacker',true);
      this.trabajadores = [
        new Empleado('Ian_Traba', 1,'Hacker',true),
        new Empleado('Jhenny_Traba', 22,'Hacker1',false),
        new Empleado('Thiago_traba', 1,'Hacker2',true),
      ];

      this.traba_externo = true;
      this.color = 'blue';
      this.color_seleccionado = '#cccc';
    }

    ngOnInit(){
      console.log(this.empleado);
      console.log(this.trabajadores);
    }
    cambiarExterno(valor){
      this.traba_externo = valor;
    }
    logColor_seleccionado(){
      console.log(this.color_seleccionado);
    }
  }
  