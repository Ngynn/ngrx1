import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpService: HttpClient) {}
  getCatImg() {
   return this.httpService.get<Cat[]>("https://api.thecatapi.com/v1/images/search?limit=10");
  }

  getCatFact() {
    return this.httpService.get<any>("https://catfact.ninja/facts");
  }
}
