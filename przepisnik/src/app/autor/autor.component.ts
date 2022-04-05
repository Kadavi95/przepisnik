import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import { Recipe } from '../types';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent implements OnInit {
  form!: FormGroup;
  lenghtOfRecipesArray!: number;
  public recipes!: Recipe[];
  faCircleXmark = faCircleXmark

  constructor(private formBuild: FormBuilder, private apiService: ApiserviceService) {}


  get ingredientsFormArray() {
    return this.form.controls['ingriedients'] as FormArray;
  }

  checkLenghtOfRecipesArray(){
    this.apiService.getAllRecipes().pipe(
      tap(
        (value) => {
          console.log(value.length)
        }
      )
    ).subscribe()
  }


  ngOnInit() {
    console.log('ngOninit');
    this.apiService.refreshRecipes$.subscribe(() => {
      this.getAllRecipes()
    })
    this.getAllRecipes();
    // this.apiService.getAllRecipes().pipe(
    //   tap(
    //     (value) => {
    //       this.recipes = value
    //       this.lenghtOfRecipesArray = value.length
    //     }
    //   )
    // ).subscribe()
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      description: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      imgUrl: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(150),
      ]),
      ingriedients: this.formBuild.array([
        this.formBuild.control(''),
        this.formBuild.control(''),
      ]),
    });
  }

  deleteItem(id: number){
    console.log('z ID', id);
    this.apiService.deleteRecipeById(id).subscribe();
    this.ngOnInit();

  }
  private getAllRecipes(){
    this.apiService.getAllRecipes().pipe(
      tap(
        (value) => {
          this.recipes = value
          this.lenghtOfRecipesArray = value.length
        }
      )
    ).subscribe()
  }
  sendRecipe(): void {
    let {name, description, imgUrl, ingriedients} = this.form.value;
    const nameShortened = name.replace(/\s/g, '').toLowerCase();
    const owner = "Khan";
    const [a, b] = ingriedients;
    const rating = 5
    const ingredientsArray = [
      {nameofingredient: a,
        valueofingredient: b}
    ,]
    const id = this.lenghtOfRecipesArray + 1;
    const objectToSend = {
      id: id,
      owner: owner,
      name: name,
      nameShortened: nameShortened,
      description: description,
      imgUrl: imgUrl,
      ingriedients: ingredientsArray,
      rating: rating
    }
    this.checkLenghtOfRecipesArray();
    this.apiService.addSignleRecipe(objectToSend).subscribe();


  }
}
