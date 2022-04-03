import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AutorComponent } from './autor/autor.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { ModalrecipeComponent } from './modalrecipe/modalrecipe.component';

const routes: Routes = [
  // {path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LogincomponentComponent },
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "recipes/:id", component: ModalrecipeComponent},
  {path: "autor", component: AutorComponent, canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
