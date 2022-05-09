import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatiomDemoComponent } from './animatiom-demo.component';

describe('AnimatiomDemoComponent', () => {
  let component: AnimatiomDemoComponent;
  let fixture: ComponentFixture<AnimatiomDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatiomDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatiomDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
