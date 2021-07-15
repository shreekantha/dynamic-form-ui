import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormMainComponentComponent } from './dynamic-form-main-component.component';

describe('DynamicFormMainComponentComponent', () => {
  let component: DynamicFormMainComponentComponent;
  let fixture: ComponentFixture<DynamicFormMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormMainComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
