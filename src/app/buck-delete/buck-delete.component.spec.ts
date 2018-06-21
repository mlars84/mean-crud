import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckDeleteComponent } from './buck-delete.component';

describe('BuckDeleteComponent', () => {
  let component: BuckDeleteComponent;
  let fixture: ComponentFixture<BuckDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
