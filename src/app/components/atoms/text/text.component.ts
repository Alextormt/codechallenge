import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  @Input() text?: string;
  @Input() isWhite?: boolean = false;
  @Input() heading?: 'title' | 'subtitle' | 'text' = 'text';
 

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
