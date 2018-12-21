import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TulEducationComponent } from './tul-education.component';

describe('TulEducationComponent', () => {
  let component: TulEducationComponent;
  let fixture: ComponentFixture<TulEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
