import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfenewsComponent } from './ifenews.component';

describe('IfenewsComponent', () => {
  let component: IfenewsComponent;
  let fixture: ComponentFixture<IfenewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfenewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
