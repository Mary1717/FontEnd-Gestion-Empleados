import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //ESTA URL OBTIENE EL LISTADO DE TODOS LOS EMPLEADOS EN EL BACKEND
  private baseURL="http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  //ESTE METODO NOS SIRVE PARA OBTENER LOS EMPLEADOS
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)
  }
  //ESTE METODO NOS SIRVE PARA REGISTRAR UN EMPLEADO
  registrarEmpleado(empleado:Empleado):Observable<Empleado>{
    return this.httpClient.post<Empleado>(`${this.baseURL}`,empleado)

  }
  actualizarEmpleado(id:number,empleado:Empleado):Observable<Empleado>{
    return this.httpClient.put<Empleado>(`${this.baseURL}/${id}`,empleado)
  }
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }
  eliminarEmpleado(id : number):Observable<Empleado>{
    return this.httpClient.delete<Empleado>(`${this.baseURL}/${id}`);
  }

}
