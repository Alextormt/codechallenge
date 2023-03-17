import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsvgComponent } from './iconsvg.component';

describe('IconsvgComponent', () => {
  let component: IconsvgComponent;
  let fixture: ComponentFixture<IconsvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
