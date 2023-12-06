import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSnakbarComponent } from './custom-snakbar.component';

describe('CustomSnakbarComponent', () => {
  let component: CustomSnakbarComponent;
  let fixture: ComponentFixture<CustomSnakbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSnakbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
