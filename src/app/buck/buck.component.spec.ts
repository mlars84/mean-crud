import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckComponent } from './buck.component';

describe('BuckComponent', () => {
  let component: BuckComponent;
  let fixture: ComponentFixture<BuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
