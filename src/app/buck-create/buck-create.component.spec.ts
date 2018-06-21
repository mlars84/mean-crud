import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckCreateComponent } from './buck-create.component';

describe('BuckCreateComponent', () => {
  let component: BuckCreateComponent;
  let fixture: ComponentFixture<BuckCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
