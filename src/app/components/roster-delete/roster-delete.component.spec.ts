import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterDeleteComponent } from './roster-delete.component';

describe('RosterDeleteComponent', () => {
  let component: RosterDeleteComponent;
  let fixture: ComponentFixture<RosterDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
