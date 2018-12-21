import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibcoursesComponent } from './libcourses.component';

describe('LibcoursesComponent', () => {
  let component: LibcoursesComponent;
  let fixture: ComponentFixture<LibcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
