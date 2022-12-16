import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {
  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute,private empleadoServicio:EmpleadoService) {

   }

   empleadoDetalle(){
    
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.empleado =new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe({ 
      next: (dato)=>{
        this.empleado=dato
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

}