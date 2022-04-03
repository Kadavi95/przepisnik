import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, Ingredients } from './types';

@Injectable({
  providedIn: 'root',
})

export class ApiserviceService {
  constructor(private httpClient: HttpClient) {}

  private recipesURL = 'http://localhost:3000/recipes';

  public getAllRecipes(){
    return this.httpClient.get<Recipe[]>(this.recipesURL)
  }
  public getSpecificRecipe(id: number){
    return this.httpClient.get<Recipe[]>(`${this.recipesURL}?id=${id}`)
  }
  public getRecipeByname(name: string){
    return this.httpClient.get<Recipe[]>(`${this.recipesURL}?nameShortened=${name}`)
  }
}
