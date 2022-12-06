import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultComponent} from "./component/result/result.component";
import {RateComponent} from "./component/rate/rate.component";
import {SearchComponent} from "./component/search/search.component";

const routes: Routes = [
  { path: '', redirectTo: '/result', pathMatch: 'full'},
  { path: 'result', component: ResultComponent},
  { path: 'result/:filter', component: ResultComponent},
  { path: 'rate', component: RateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
