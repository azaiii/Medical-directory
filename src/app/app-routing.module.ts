import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsListComponent } from './components/patients-list/patients-list.component';


const routes: Routes = [{
  path: '',
  component: PatientsListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
