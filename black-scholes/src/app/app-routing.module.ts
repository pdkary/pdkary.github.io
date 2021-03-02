import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { LinksComponent } from './links/links.component';
import { BlackScholesComponent } from './black-scholes/black-scholes.component';


const appRoutes: Routes = [
  {path: '',component: PersonalComponent,data: {title: 'Personal'}},
  {path: 'personal',component: PersonalComponent,data:{title:'Personal'}},
  {path: 'professional',component:ProfessionalComponent,data:{title:'Professional'}},
  {path: 'links',component:LinksComponent,data:{title:"Links"}},
  {path: 'Black-Scholes',component:BlackScholesComponent,data:{title:"Black Scholes Option Analyzer"}}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }