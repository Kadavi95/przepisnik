import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AutorComponent } from './autor/autor.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { ModalrecipeComponent } from './modalrecipe/modalrecipe.component';
import { Roles } from './shared/Roles';

const routes: Routes = [
  // {path: "", redirectTo: "login", pathMatch: 'full'},
  { path: 'login', component: LogincomponentComponent },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'user', component: HomeComponent, canActivate: RoleGuard, data: {roles: [Roles.user]} },
      { path: 'autor', component: AutorComponent, canActivate: RoleGuard, data: {roles: [Roles.user]} },
    ]
    ,
  },
  { path: 'recipes/:id', component: ModalrecipeComponent },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
