import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View3dAreaComponent } from './view-3d-area.component';

describe('View3dAreaComponent', () => {
  let component: View3dAreaComponent;
  let fixture: ComponentFixture<View3dAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View3dAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View3dAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
