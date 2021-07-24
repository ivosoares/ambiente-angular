import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiURL = 'https://rickandmortyapi.com/api/character';


  constructor(private httpClient: HttpClient) { }

  getList():Observable<any> {
    return this.httpClient.get<any>(this.apiURL);
  }
}
