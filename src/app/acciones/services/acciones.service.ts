import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

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

    console.log(params);

    this.http.get(`${ this.serviceUrl}/query`, { params: params })
      .subscribe( resp => {
        console.log(resp);
      });

  }
}
