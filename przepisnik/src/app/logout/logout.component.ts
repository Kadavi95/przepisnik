import { Component, OnInit } from '@angular/core';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("last standing version");
  }

  faPerson = faPerson
}
