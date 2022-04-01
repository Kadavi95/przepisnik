import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, pipe, observable, Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

// type singleUser = {
//   id: number;
//   nickname: string;
//   password: string;
//   class: string;
// };
// type loggedUser = {
//   nickname: string;
//   class: string
// }

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private httpClient: HttpClient) {}

  private usersUrl = 'http://localhost:3000/users';

  login(nickname: string, password: string){
    const searchURL = `${this.usersUrl}?nickname=${nickname}&password=${password}`
    return this.httpClient.get(searchURL);

  }
}
