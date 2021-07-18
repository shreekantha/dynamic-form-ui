import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicUiComponent } from './dynamic-ui.component';

describe('DynamicUi', () => {
  let component: DynamicUiComponent;
  let fixture: ComponentFixture<DynamicUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
