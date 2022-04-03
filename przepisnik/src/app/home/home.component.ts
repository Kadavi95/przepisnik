import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(private apiService: ApiserviceService) {}

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe((val) => (this.recipes = val));
  }

  onSearch(event: Event) {
    const recipeName = (<HTMLInputElement>event.target).value
      .replace(/\s/g, '')
      .toLowerCase();
    console.log(recipeName);
    if (recipeName.length > 0) {
      // console.log(value.replace(/\s/g, '').toLowerCase())
      // console.log(value.trim().replace(/\s/g, '').toLowerCase());
      this.apiService
        .getRecipeByname(recipeName)
        .pipe(delay(1000))
        .subscribe((recipes) => (this.recipes = recipes));
    } else {
      this.apiService.getAllRecipes().subscribe((recipes) => (this.recipes = recipes));
    }
  }
}
