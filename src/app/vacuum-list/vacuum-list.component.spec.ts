import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumListComponent } from './vacuum-list.component';

describe('VacuumListComponent', () => {
  let component: VacuumListComponent;
  let fixture: ComponentFixture<VacuumListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacuumListComponent]
    });
    fixture = TestBed.createComponent(VacuumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
