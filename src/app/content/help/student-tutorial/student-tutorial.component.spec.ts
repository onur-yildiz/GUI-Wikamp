import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTutorialComponent } from './student-tutorial.component';

describe('StudentTutorialComponent', () => {
  let component: StudentTutorialComponent;
  let fixture: ComponentFixture<StudentTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
