import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './partials/home/home.component';
import { AboutComponent } from './partials/about/about.component';
import { DesarrollosComponent } from './partials/desarrollos/desarrollos.component';
import { PortfolioComponent } from './partials/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
  path:'desarrollos',
  component: DesarrollosComponent,
  pathMatch: 'full'
  },
  {
  path:'portfolio',
  component: PortfolioComponent,
  pathMatch: 'full'  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
