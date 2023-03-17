import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TextModule } from '../../atoms/text/text.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    TextModule
  ],
  exports: [
    FooterComponent
  ],
})
export class FooterModule { }
