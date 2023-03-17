import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchModule1Service } from 'src/app/services/fetchModule1Data.service';
import { Subscription } from 'rxjs';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';
import { Module1Interface } from 'src/app/interfaces/organisms/module1.interface';
import { Module1Observable } from 'src/app/observables/module1Data.observable';
@Component({
  selector: 'app-theme1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public data?: Module1Interface;
  public theme?: ThemeInterface;
  public isLoading?: boolean = false;

  
  constructor( 
    private fetchModule1Service: FetchModule1Service,
    private $module1Data: Module1Observable,
     private $theme: ThemeObservable
  ) { }

  ngOnInit(): void {       
    //fetch data and set default theme
    this.fetchModule1Service.fetch();
    this.$theme.set('theme1')
    
    //subscribe to theme
    this.subscriptions.push(this.$theme.get().subscribe(data => {
      this.theme = data
    }))

    //subscribe to module1 data
    this.subscriptions.push(this.$module1Data.get().subscribe(data => {
      this.data = data?.data      
      this.isLoading = data?.isLoading;
      if (data?.data?.theme) this.$theme.set(data?.data?.theme);      
    }))
  }

  // unsubcribe observables
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=> item.unsubscribe())
  }

}
