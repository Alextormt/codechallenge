import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import { InformativeListModule } from 'src/app/components/molecules/informative-list/informative-list.module';
import { BannerMultiimageModule } from 'src/app/components/molecules/banner-multiimage/banner-multiimage.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { TextModule } from 'src/app/components/atoms/text/text.module';

@NgModule({
  declarations: [
    Module2Component
  ],
  imports: [
    CommonModule,
    TextModule,
    Module2RoutingModule,
    InformativeListModule,
    BannerMultiimageModule,
    MatProgressSpinnerModule
  ],
  exports: [
    Module2Component
  ],
})
export class Module2Module { }
