import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExtraInfoComponent } from './card-extra-info.component';
import { TextModule } from '../../atoms/text/text.module';
import { ImageModule } from '../../atoms/image/image.module';



@NgModule({
  declarations: [
    CardExtraInfoComponent
  ],
  imports: [
    CommonModule,
    TextModule,
    ImageModule
  ],
  exports: [
    CardExtraInfoComponent
  ],
})
export class CardExtraInfoModule { }
