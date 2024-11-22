import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // interceptor: before sending the http request it will execute the interceptor first
  
  private apiUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrations`, user, { observe: 'response'});
  }

  getUsers(): Observable<any[]> {
    return this.http.get<User[]>(`${this.apiUrl}/registrations`);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<User>(`${this.apiUrl}/registrations/${userId}`);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/registrations/${userId}`, userData);
  }
}
