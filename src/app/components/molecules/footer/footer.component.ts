import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;

  constructor(
    private $theme: ThemeObservable
  ) { }

  ngOnInit(): void {
     //subscribe to theme
    this.subscriptions.push(this.$theme.get().subscribe(data => {
      this.theme = data
    }))
  }

  // unsubcribe observables
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=> item.unsubscribe())
  }

}
