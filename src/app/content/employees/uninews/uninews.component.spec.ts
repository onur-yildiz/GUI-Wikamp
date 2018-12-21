import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UninewsComponent } from './uninews.component';

describe('UninewsComponent', () => {
  let component: UninewsComponent;
  let fixture: ComponentFixture<UninewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UninewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UninewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
