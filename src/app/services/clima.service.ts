import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  ciudad : string ;
  private cardOpened = new Subject();
  private DATA_CIUDAD = new Subject();
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = "a725161bb3e330a86c837441d1047959";


  constructor(private http: HttpClient) {
    this.ciudad = '';
    }

   asignarCiuda (ciudad: string){
    this.ciudad = ciudad;
    //console.log("la ciudad que llego al obserbable fue " + ciudad)
    this.DATA_CIUDAD.next(ciudad);
   }

   getCiudadData (){
    return this.DATA_CIUDAD.asObservable();
   }

   setCardStatus(status: boolean){
    this.cardOpened.next(status)
   }

   getCardStatus(){
    return this.cardOpened.asObservable();
   }

   getCLima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL)
   }


}
