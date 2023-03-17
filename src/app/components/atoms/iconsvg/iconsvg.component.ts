import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IconSvgAtomInterface } from 'src/app/interfaces/atoms/iconSvgAtom.interface';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-iconsvg',
  templateUrl: './iconsvg.component.html',
  styleUrls: ['./iconsvg.component.scss']
})
export class IconsvgComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  @Input() icon?: IconSvgAtomInterface;

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
