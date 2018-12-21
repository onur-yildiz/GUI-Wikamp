import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqcourseComponent } from './reqcourse.component';

describe('ReqcourseComponent', () => {
  let component: ReqcourseComponent;
  let fixture: ComponentFixture<ReqcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
