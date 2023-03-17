import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { Module2Interface } from 'src/app/interfaces/organisms/module2.interface';
import { Module2Observable } from 'src/app/observables/module2Data.observable';
import { ThemeObservable } from 'src/app/observables/theme.observable';
import { FetchModule2Service } from 'src/app/services/fetchModule2Data.service';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  public data?: Module2Interface;
  public isLoading?: boolean = false;

  
  constructor( 
    private fetchModule2Service: FetchModule2Service,
    private $module2Data: Module2Observable,
    private $theme: ThemeObservable
  ) { }

  ngOnInit(): void {  
    //fetch data and set default theme
    this.fetchModule2Service.fetch(); 
    this.$theme.set('theme2')
    
    //subscribe to theme
    this.subscriptions.push(this.$theme.get().subscribe(data => {
      this.theme = data
    }))

    //subscribe to module2 data
    this.subscriptions.push(this.$module2Data.get().subscribe(data => {
      this.data = data?.data;
      this.isLoading = data?.isLoading; 
      if (data?.data?.theme) this.$theme.set(data?.data?.theme); 
    }))
  }

  // unsubcribe observables
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=> item.unsubscribe())
  }

}
