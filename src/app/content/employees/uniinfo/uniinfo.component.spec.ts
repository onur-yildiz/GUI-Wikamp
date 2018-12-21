import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniinfoComponent } from './uniinfo.component';

describe('UniinfoComponent', () => {
  let component: UniinfoComponent;
  let fixture: ComponentFixture<UniinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
