import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTutorialComponent } from './teacher-tutorial.component';

describe('TeacherTutorialComponent', () => {
  let component: TeacherTutorialComponent;
  let fixture: ComponentFixture<TeacherTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
