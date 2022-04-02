import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './types';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authorized = new BehaviorSubject<User | null>(null);

  get authorized$() {
    return this.authorized.asObservable();
  }

  constructor(private router: Router, private httpClient: HttpClient) {}
  private usersUrl: string = 'http://localhost:3000/users';

  public login(nickname: string, password: string) {
    const searchURL = `${this.usersUrl}?nickname=${nickname}&password=${password}`;
    console.log(searchURL);
    return this.httpClient
      .get<User[]>(searchURL)
      .pipe(
        // map((value) => value.length > 0 ? this.authorized = value[0] : this.authorized = null),
        map((value) =>
          value.length > 0
            ? this.authorized.next(value[0])
            : this.authorized.next(null)
        ),
        tap((value) => console.log(value))
      )

  }
  public logout(): void {
    console.log('logout');
  }
}

// type User = {
//   id: number;
//   nickname: string;
//   password: string;
//   class: string;
// };

  // authorizedCheck() {
  //   if (this.authorized.getValue() === null) {
  //     console.log(this.authorized.getValue(), 'jestem nullem');
  //     return false;
  //   } else {
  //     console.log(this.authorized.getValue(), 'nie jestem nullem');
  //     return true;
  //   }
  // }

  // public authorized!: User | null
  // public authorizedValue() {
  //   if(this.authorized !== null && this.authorized !== undefined){
  //     console.log(this.authorized);
  //     console.log("fuckedUo");
  //     return true
  //   } else {
  //     return false
  //   }
  // }

// private authorized!: BehaviorSubject<boolean>;
//   get authorized$() {
//     return this.authorized.asObservable();
//   }

//   constructor(private router: Router, private httpClient: HttpClient) {
//     this.authorized = new BehaviorSubject(!!localStorage.getItem('user'));
//   }

//   private  usersUrl = 'http://localhost:3000/users';

//   public login(nickname: string, password: string) {

//     const searchURL = `${this.usersUrl}?nickname=${nickname}&password=${password}`
//     this.httpClient.get<User>(searchURL).subscribe((response) => {
//       if(response.nickname){
//         console.log(response.nickname);
//       } else {
//         console.log("NICCC")
//       }
//   }
//     )
// }

// localStorage.setItem('user', JSON.stringify({ role }));
// this.authorized.next(true);

// public logout() {
//   localStorage.removeItem('user');
//   this.authorized.next(false);
//   this.router.navigate(['auth']);
// }

// localStorage.setItem('user', JSON.stringify({ role }));
// this.authorized.next(true);
// })

