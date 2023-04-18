import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {


  resultSuscription: Subscription;

  urlImg =  "https://lingokids.com/wp-content/uploads/2020/04/Weather.png";
  ciudad: string;
  results: any;

  respuesta: any;
  constructor(private _climaService: ClimaService){
    this.ciudad = '';
    this.results = false;

    this.resultSuscription = this._climaService.getCardStatus().subscribe(data => {
      this.results = data;
    })
  }

  handleButton(){
   // console.log(this.ciudad);
   this._climaService.asignarCiuda(this.ciudad);
   this._climaService.setCardStatus(true);
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.resultSuscription.unsubscribe();
  }

}
