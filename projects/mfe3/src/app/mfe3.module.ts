import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MfeComponent } from './mfe.component';

@NgModule({
  declarations: [
    MfeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'mfe3',
      component: MfeComponent
    }])
  ],
  exports: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Mfe3Module { }
