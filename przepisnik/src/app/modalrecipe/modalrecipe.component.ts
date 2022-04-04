import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faStopCircle } from '@fortawesome/free-regular-svg-icons';
import { ApiserviceService } from '../apiservice.service';
import { tap, map } from 'rxjs';
import { Recipe } from '../types';

@Component({
  selector: 'app-modalrecipe',
  templateUrl: './modalrecipe.component.html',
  styleUrls: ['./modalrecipe.component.scss'],
})
export class ModalrecipeComponent implements OnInit {
  public id!: number;
  public recipe!: Recipe;

  constructor(
    private apiService: ApiserviceService,
    private activeRoute: ActivatedRoute
  ) {}

 
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.apiService
        .getSpecificRecipe(this.id)
        .pipe()
        .subscribe(val => {
          this.recipe = val[0];
          console.log(this.recipe);
        });
    });
  }
  faStopCircle = faStopCircle;


}
