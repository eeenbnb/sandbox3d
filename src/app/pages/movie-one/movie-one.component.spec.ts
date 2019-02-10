import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOneComponent } from './movie-one.component';

describe('MovieOneComponent', () => {
  let component: MovieOneComponent;
  let fixture: ComponentFixture<MovieOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
