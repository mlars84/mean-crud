import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckDetailComponent } from './buck-detail.component';

describe('BuckDetailComponent', () => {
  let component: BuckDetailComponent;
  let fixture: ComponentFixture<BuckDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
