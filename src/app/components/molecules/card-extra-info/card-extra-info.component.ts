import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageAtomInterface } from 'src/app/interfaces/atoms/imageAtom.interface';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-card-extra-info',
  templateUrl: './card-extra-info.component.html',
  styleUrls: ['./card-extra-info.component.scss']
})
export class CardExtraInfoComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  @Input() image?: ImageAtomInterface 
  @Input() text?: string;

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
