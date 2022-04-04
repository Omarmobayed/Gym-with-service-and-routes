import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrusComponent } from './thrus.component';

describe('ThrusComponent', () => {
  let component: ThrusComponent;
  let fixture: ComponentFixture<ThrusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
