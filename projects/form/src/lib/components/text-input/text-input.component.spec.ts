import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';

fdescribe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use and empty string as the deafult value and accept a value as an override', () => {
    expect(component.getValue()).toBe('');
  });
});