import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  public activeLinkIndex: number = -1; 
  public headerItems = [
        {
            label: 'Module1',
            link: './module1',   
            index: 0,
        }, {
            label: 'Module2',
            link: './module2',  
            index: 1
        }, 
    ];

  constructor(
    private router: Router,
    private $theme: ThemeObservable
  ) { }

  ngOnInit(): void {
    // subscribe to router events
    this.subscriptions.push(this.router.events.subscribe((res) => {
          this.activeLinkIndex = 
            this.headerItems.find(item =>
              item.link === '.' + this.router.url
            )?.index ?? 0;
    }));
    // subscribe to theme
    this.subscriptions.push(this.$theme.get().subscribe(data => {
      this.theme = data
    }))
  }

  //change theme
  public onClickTheme(theme: ThemeInterface):void {
    if (theme === 'theme1') this.$theme?.set('theme1');
    if (theme === 'theme2') this.$theme?.set('theme2');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item=> item.unsubscribe())
  }

}

