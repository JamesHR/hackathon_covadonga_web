import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { VisitsComponent } from './visits/visits.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'visits', component: VisitsComponent}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
