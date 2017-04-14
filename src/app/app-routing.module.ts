import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './partials/home/home.component';
import { AboutComponent } from './partials/about/about.component';
import { DesarrollosComponent } from './partials/desarrollos/desarrollos.component';
import { PortfolioComponent } from './partials/portfolio/portfolio.component';
import { ServiciosComponent } from './partials/servicios/servicios.component';
import { ContactoComponent } from './partials/contacto/contacto.component';

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
  {
  path:'servicios',
  component: ServiciosComponent,
  pathMatch: 'full'
  },
  {
  path: 'contacto',
  component: ContactoComponent,
  pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
