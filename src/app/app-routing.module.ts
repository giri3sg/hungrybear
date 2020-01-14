import { NgModule } from '@angular/core';
import {Routes, RouterModule, GuardsCheckStart} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
