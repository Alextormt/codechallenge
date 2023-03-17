import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TextModule } from '../../atoms/text/text.module';
import { IconsvgModule } from '../../atoms/iconsvg/iconsvg.module';
import { CardExtraInfoModule } from '../card-extra-info/card-extra-info.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    TextModule,
    IconsvgModule,   
    CardExtraInfoModule
  ],
  exports: [
    CardComponent
  ],
})
export class CardModule { }
