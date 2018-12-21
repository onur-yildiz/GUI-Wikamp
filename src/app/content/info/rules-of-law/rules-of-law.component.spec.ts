import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesOfLawComponent } from './rules-of-law.component';

describe('RulesOfLawComponent', () => {
  let component: RulesOfLawComponent;
  let fixture: ComponentFixture<RulesOfLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesOfLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
