import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: ScheduleComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
