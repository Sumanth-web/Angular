import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCheckComponent } from './component-check.component';

describe('ComponentCheckComponent', () => {
  let component: ComponentCheckComponent;
  let fixture: ComponentFixture<ComponentCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
