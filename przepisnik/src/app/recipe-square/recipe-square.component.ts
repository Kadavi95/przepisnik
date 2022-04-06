import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Subject } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-square',
  templateUrl: './recipe-square.component.html',
  styleUrls: ['./recipe-square.component.scss']
})

export class RecipeSquareComponent implements OnInit {
  @Input() recipe!: Recipe;
  // @Output() id = new EventEmitter<number>();

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
  }
  faCircleXmark = faCircleXmark;

  deleteRecipe(id: number){
    console.log("deleteRecipe", "id:" + id);
    this.apiService._deletedRecipe$.next(id);

  }
}
