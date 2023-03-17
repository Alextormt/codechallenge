import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { ImageAtomInterface } from 'src/app/interfaces/atoms/imageAtom.interface';
import { ThemeInterface } from 'src/app/interfaces/config/theme.interface';
import { MatDialog } from "@angular/material/dialog";
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { Subscription } from 'rxjs';
import { ThemeObservable } from 'src/app/observables/theme.observable';

@Component({
  selector: 'app-banner-multiimage',
  templateUrl: './banner-multiimage.component.html',
  styleUrls: ['./banner-multiimage.component.scss']
})
export class BannerMultiimageComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public theme?: ThemeInterface;
  @Input() images?:  ImageAtomInterface[]

  constructor(
    private dialog: MatDialog,
    private $theme: ThemeObservable
  ) { }

  ngOnInit(): void { 
    //subscribe to theme
    this.subscriptions.push(this.$theme.get().subscribe(data => {
      this.theme = data
    }))
  }
  
  // open modal with image on click
  public onClickImage(image: ImageAtomInterface): void{
    this.dialog.open(ModalImageComponent, {   
        panelClass: 'modalImage',
        data: image,
        autoFocus:false
      });
  }
  // unsubcribe observables
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=> item.unsubscribe())
  }



}
