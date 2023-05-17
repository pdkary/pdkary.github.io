import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { LinksComponent } from './links/links.component';
import { BlackScholesComponent } from './black-scholes/black-scholes.component';
import { RubixComponent } from './rubix/rubix.component';
import { MinkowskiComponent } from './minkowski/minkowski.component';
import { GraphComponent } from './graph/graph.component';
import { LilRobotsComponent } from './lil-robots/lil-robots.component';
import { GraphingComponent } from './graphing/graphing.component';

const appRoutes: Routes = [
  {path: '',component: PersonalComponent,data: {title: 'Personal'}},
  {path: 'personal',component: PersonalComponent,data:{title:'Personal'}},
  {path: 'professional',component:ProfessionalComponent,data:{title:'Professional'}},
  {path: 'links',component:LinksComponent,data:{title:"Links"}},
  {path: 'Black-Scholes',component:BlackScholesComponent,data:{title:"Black Scholes Option Analyzer"}},
  {path: 'rubix',component:RubixComponent,data:{title:"Rubix Cube Simulation"}},
  {path: 'minkowski', component: MinkowskiComponent, data:{title:"Minkowski Diagrams"}},
  {path: 'graphs', component: GraphingComponent, data:{title:"An Angular Graphing Component"}},
  {path: 'lil-robots', component: LilRobotsComponent, data:{title:"A bunch a lil guys"}}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }