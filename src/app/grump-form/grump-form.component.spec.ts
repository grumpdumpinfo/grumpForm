import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumpFormComponent } from './grump-form.component';

describe('GrumpFormComponent', () => {
  let component: GrumpFormComponent;
  let fixture: ComponentFixture<GrumpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrumpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrumpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
