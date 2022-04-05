import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { ModalrecipeComponent } from './modalrecipe/modalrecipe.component';
import { AutorComponent } from './autor/autor.component';
import { RecipeSquareComponent } from './recipe-square/recipe-square.component';

@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    HomeComponent,
    HeaderComponent,
    RecipeCardComponent,
    ModalrecipeComponent,
    AutorComponent,
    RecipeSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
