import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuesComponent } from './tues.component';

describe('TuesComponent', () => {
  let component: TuesComponent;
  let fixture: ComponentFixture<TuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
