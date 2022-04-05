import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Recipe, Ingredients } from './types';

@Injectable({
  providedIn: 'root',
})

export class ApiserviceService {
  constructor(private httpClient: HttpClient) {}

  private recipesURL = 'http://localhost:3000/recipes';
  private _refreshRecipes$ = new Subject<void>();
  public _deletedRecipe$ = new Subject<any>();

  get refreshRecipes$ (){
    return this._refreshRecipes$
  }



  public deleteRecipeById(id: number){
    return this.httpClient.delete(`${this.recipesURL}/${id}`)
  }

  public addSignleRecipe(recipe: Recipe){
    return this.httpClient.post(this.recipesURL, recipe).pipe(
      tap(() => {
        this._refreshRecipes$.next()
      })
    )
  };

  public getAllRecipes(){
    return this.httpClient.get<Recipe[]>(this.recipesURL)
  };
  public getSpecificRecipe(id: number){
    return this.httpClient.get<Recipe[]>(`${this.recipesURL}?id=${id}`)
  };
  public getRecipeByname(name: string){
    return this.httpClient.get<Recipe[]>(`${this.recipesURL}?nameShortened=${name}`)
  };
}
