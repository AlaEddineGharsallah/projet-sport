import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislpayMatchComponent } from './dislpay-match.component';

describe('DislpayMatchComponent', () => {
  let component: DislpayMatchComponent;
  let fixture: ComponentFixture<DislpayMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislpayMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislpayMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
