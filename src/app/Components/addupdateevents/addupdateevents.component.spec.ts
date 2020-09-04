import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateeventsComponent } from './addupdateevents.component';

describe('AddupdateeventsComponent', () => {
  let component: AddupdateeventsComponent;
  let fixture: ComponentFixture<AddupdateeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdateeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdateeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
