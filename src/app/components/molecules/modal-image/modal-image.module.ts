import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalImageComponent } from './modal-image.component';
import { ImageModule } from '../../atoms/image/image.module';
import { TextModule } from '../../atoms/text/text.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ModalImageComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    TextModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    ModalImageComponent
  ],
})
export class ModalImageModule { }
