import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getContracts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/contracts');
  }

  getCashKicks(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cashkicks');
  }
}
