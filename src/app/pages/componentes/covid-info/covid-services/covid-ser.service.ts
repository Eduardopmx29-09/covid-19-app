import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidSerService {

  Url:string="https://api.covid19api.com/countries";

  constructor(private http:HttpClient ) {

  }

  getAll():Promise<any[]>{

    console.log(`respuesta desde el servicio con url ${this.Url}`)
    return this.http.get<any[]>(this.Url).toPromise();


  }
}
