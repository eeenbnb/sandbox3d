import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteffectComponent } from './posteffect.component';

describe('PosteffectComponent', () => {
  let component: PosteffectComponent;
  let fixture: ComponentFixture<PosteffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
