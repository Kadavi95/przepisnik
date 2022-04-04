import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent implements OnInit {
  form!: FormGroup;
  lenghtOfRecipesArray!: number;

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
    this.apiService.getAllRecipes().pipe(
      tap(
        (value) => {
          this.lenghtOfRecipesArray = value.length
        }
      )
    ).subscribe()
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      description: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
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

  sendRecipe(): void {
    const {name, description, imgUrl, ingriedients} = this.form.value;
    const nameShortened = name.replace(/\s/g, '').toLowerCase();
    const owner = "Khan";
    const id = this.lenghtOfRecipesArray + 1;
    const objectToSend = {
      id: id,
      owner: owner,
      name: name,
      nameShortened: nameShortened,
      description: description,
      imgUrl: imgUrl,
      ingriedients: ingriedients
    }
    this.checkLenghtOfRecipesArray()
    this.apiService.addSignleRecipe(objectToSend).subscribe()


  }
}
