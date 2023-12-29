import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'detail/:value', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
