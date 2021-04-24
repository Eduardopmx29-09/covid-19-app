import { Component, OnInit } from '@angular/core';
import { CovidSerService } from '../covid-services/covid-ser.service';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.scss']
})
export class CovidInfoComponent implements OnInit {

  covidInfo:any;

  constructor(private covidServi:CovidSerService) {

  }

  ngOnInit(): void {
    this.DataBase()
    /*this.covidServi.getAll()
    .then(res => this.covidInfo = res)
    .catch(err => console.log('error en la peticion '));*/
  }


  async DataBase(){
    try{
      const res = await this.covidServi.getAll()
      this.covidInfo=res;
     // console.log(res)
    }catch(error){
      console.log(error)
    }
  }
}
