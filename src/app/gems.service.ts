import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GemsService {

  private baseUrl = 'http://13.42.27.105:8081/employee';

  constructor(private http: HttpClient) { }

  gemsDetails(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGems(gems: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, gems);
  }

 /*  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  } *//*

  deleteGems(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  } */

  deleteGems(id: String): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

  getGemsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
