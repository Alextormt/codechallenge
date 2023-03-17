import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerMultiimageComponent } from './banner-multiimage.component';
import { ImageModule } from '../../atoms/image/image.module';
import { ModalImageModule } from '../modal-image/modal-image.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    BannerMultiimageComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    ModalImageModule,
    MatDialogModule,
    MatTooltipModule
  ],
  exports: [
    BannerMultiimageComponent
  ],
})
export class BannerMultiimageModule { }
