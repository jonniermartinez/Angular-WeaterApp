import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  ciudad: string;
  grados: number;
  constructor (private _climaService: ClimaService){
    this.ciudad = '';
    this.grados = 0;
    this.obtenerCLima();
  }
  handleButton(){
    this._climaService.setCardStatus(false);
  }
  obtenerCLima(){
    this.ciudad = this._climaService.ciudad;

    this._climaService.getCLima(this.ciudad).subscribe(data => {
      console.log(data)
      this.grados = this.farengitToGrades(data.clouds.all);
    })
  }
  farengitToGrades(farengit: number): number{
      const grados = Math.round( (farengit - 32) / 1.8);

      return grados;
  }


}
