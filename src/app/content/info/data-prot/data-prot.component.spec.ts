import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtComponent } from './data-prot.component';

describe('DataProtComponent', () => {
  let component: DataProtComponent;
  let fixture: ComponentFixture<DataProtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
