import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckEditComponent } from './buck-edit.component';

describe('BuckEditComponent', () => {
  let component: BuckEditComponent;
  let fixture: ComponentFixture<BuckEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
