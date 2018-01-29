import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterformComponent } from './meterform.component';

describe('MeterformComponent', () => {
  let component: MeterformComponent;
  let fixture: ComponentFixture<MeterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
