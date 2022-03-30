import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
