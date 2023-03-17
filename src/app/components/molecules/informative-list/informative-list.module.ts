import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativeListComponent } from './informative-list.component';
import { TextModule } from '../../atoms/text/text.module';



@NgModule({
  declarations: [
    InformativeListComponent
  ],
  imports: [
    CommonModule,
    TextModule
  ],
  exports: [
    InformativeListComponent
  ],
})
export class InformativeListModule { }
