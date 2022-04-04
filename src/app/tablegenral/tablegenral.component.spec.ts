import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegenralComponent } from './tablegenral.component';

describe('TablegenralComponent', () => {
  let component: TablegenralComponent;
  let fixture: ComponentFixture<TablegenralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablegenralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablegenralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
