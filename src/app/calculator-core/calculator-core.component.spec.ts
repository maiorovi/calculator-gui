import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorCoreComponent } from './calculator-core.component';

describe('CalculatorCoreComponent', () => {
  let component: CalculatorCoreComponent;
  let fixture: ComponentFixture<CalculatorCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
