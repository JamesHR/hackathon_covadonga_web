import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VisitsFormComponent } from './visits/visits-form/visits-form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ShareModule } from '../shared/share.module';
import { VisitsComponent } from './visits/visits.component';



@NgModule({
  declarations: [HomeComponent, VisitsFormComponent, UsersComponent, UsersFormComponent, VisitsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class DashboardModule { }
