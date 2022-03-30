import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, pipe, observable, Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

type singleUser = {
  id: number;
  nickname: string;
  password: string;
  class: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private httpClient: HttpClient) {}

  private usersUrl = 'http://localhost:3000/users';

   getUsers(): Observable<singleUser[]> {
    return this.httpClient.get<singleUser[]>(this.usersUrl).pipe();
  }

  // getUser(name: string, password: string) {
  //   this.httpClient
  //     .get<any>('http://localhost:3000/users')
  //     .subscribe((response) => {
  //       const trustedUser = response.find((item: any) => {
  //         return (
  //           item.nickname.toUpperCase() === name.toUpperCase() &&
  //           item.password === password.toUpperCase()
  //         );
  //       });
  //       if (trustedUser) {
  //         console.log('go on');
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  // }
  // getHeroes(name: string, password: string): Observable<singleUser> {
  //   console.log(name, password);
  //   return this.httpClient.get<singleUser>(this.usersUrl).pipe(
  //     tap(item => console.log(item.nickname))
  //     filter((item) => item.nickname.toUpperCase() === name.toUpperCase())
  //   );
  // }

  // getHeroes(name: string, password: string) {
  //   console.log(name, password);
  //   return this.httpClient.get<singleUser>(this.usersUrl).pipe(
  //     tap(item => console.log(item))
  //   );
  // }
}
