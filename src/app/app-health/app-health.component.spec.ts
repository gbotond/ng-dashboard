import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHealthComponent } from './app-health.component';

describe('AppHealthComponent', () => {
  let component: AppHealthComponent;
  let fixture: ComponentFixture<AppHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
