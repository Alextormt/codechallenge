import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExtraInfoComponent } from './card-extra-info.component';

describe('CardExtraInfoComponent', () => {
  let component: CardExtraInfoComponent;
  let fixture: ComponentFixture<CardExtraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExtraInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
