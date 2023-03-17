import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMultiimageComponent } from './banner-multiimage.component';

describe('BannerMultiimageComponent', () => {
  let component: BannerMultiimageComponent;
  let fixture: ComponentFixture<BannerMultiimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMultiimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMultiimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
