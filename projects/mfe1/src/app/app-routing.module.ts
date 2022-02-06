import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeComponent } from './mfe.component';

const routes: Routes = [{
  path: '',
  component: MfeComponent,
  pathMatch: 'full'
}, {
  path: 'mfe1',
  component: MfeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
