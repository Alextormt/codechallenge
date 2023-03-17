import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { InformativeListMoleculeInterface } from 'src/app/interfaces/molecules/informativeListMolecule.interface';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-informative-list',
  templateUrl: './informative-list.component.html',
  styleUrls: ['./informative-list.component.scss']
})
export class InformativeListComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  @Input() data?: InformativeListMoleculeInterface = {    
    title: '',
    list: []
  }

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
