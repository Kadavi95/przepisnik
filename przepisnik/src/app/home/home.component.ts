import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Recipe } from '../types';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public recipes: Recipe[] = []

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe(val => this.recipes = val)
  }

}
