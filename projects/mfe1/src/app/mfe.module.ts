import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MfeComponent } from './mfe.component';

@NgModule({
  declarations: [
    MfeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'mfe1',
      component: MfeComponent
    }])
  ],
  exports: [ ]
})
export class MfeModule { }
