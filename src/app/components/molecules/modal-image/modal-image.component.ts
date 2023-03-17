import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageAtomInterface } from 'src/app/interfaces/atoms/imageAtom.interface';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public image?: ImageAtomInterface 
  ) { }

  ngOnInit(): void {

  }

}
