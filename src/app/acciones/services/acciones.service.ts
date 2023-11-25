import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Accion, Busqueda } from '../interfaz/accion.interface';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  public listaAcciones: Accion = {
    "01. symbol":             '',
    "02. open":               '',
    "03. high":               '',
    "04. low":                '',
    "05. price":              '',
    "06. volume":             '',
    "07. latest trading day": '',
    "08. previous close":     '',
    "09. change":             '',
    "10. change percent":     '',
  };

  public mostradorTabla = false;
  public valor = 0;
  private _tagsHistory: string[] = [];
  private apiKey: string = 'PYCLROWFHP6YOJ3A';
  private serviceUrl: string = 'https://www.alphavantage.co';
  private function: string = 'GLOBAL_QUOTE';

  constructor( private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory( tag: string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,5);
  }

  apiPeticion(tag: string): void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('function', this.function)
    .set('symbol', tag)
    .set('apikey', this.apiKey)


    this.http.get<Busqueda>(`${ this.serviceUrl}/query`, { params: params })
      .subscribe( resp => {
        this.listaAcciones = resp['Global Quote'];
        this.mostradorTabla = true;
      });
  }

  calcularCompra(volumen:number){
    this.listaAcciones['05. price'] = '25.03'
    this.valor = parseFloat(this.listaAcciones['05. price']) * volumen;
  }
}
