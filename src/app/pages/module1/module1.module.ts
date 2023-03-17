import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1RoutingModule } from './module1-routing.module';
import { CardModule } from 'src/app/components/molecules/card/card.module';
import { TextModule } from 'src/app/components/atoms/text/text.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Module1Component } from './module1.component';


@NgModule({
  declarations: [
    Module1Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    CardModule,
    TextModule,
    MatProgressSpinnerModule
  ],
  exports: [
    Module1Component
  ],
})
export class Module1Module { }
