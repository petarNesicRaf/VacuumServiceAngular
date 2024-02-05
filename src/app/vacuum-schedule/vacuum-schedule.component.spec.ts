import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumScheduleComponent } from './vacuum-schedule.component';

describe('VacuumScheduleComponent', () => {
  let component: VacuumScheduleComponent;
  let fixture: ComponentFixture<VacuumScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacuumScheduleComponent]
    });
    fixture = TestBed.createComponent(VacuumScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
