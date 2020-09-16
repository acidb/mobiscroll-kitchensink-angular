import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcalendarComponent } from './eventcalendar.component';

describe('EventcalendarComponent', () => {
  let component: EventcalendarComponent;
  let fixture: ComponentFixture<EventcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
