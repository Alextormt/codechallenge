import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TextModule } from '../../atoms/text/text.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TextModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule { }
