import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { CardMoleculeInterface } from 'src/app/interfaces/molecules/cardMolecule.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  
  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  @Input() data?: CardMoleculeInterface;

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
