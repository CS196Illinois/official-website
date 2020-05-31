import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturesTableComponent } from './lectures-table.component';

describe('LecturesTableComponent', () => {
  let component: LecturesTableComponent;
  let fixture: ComponentFixture<LecturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
