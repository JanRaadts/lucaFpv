import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyecatcherComponent } from './eyecatcher.component';

describe('EyecatcherComponent', () => {
  let component: EyecatcherComponent;
  let fixture: ComponentFixture<EyecatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyecatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyecatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
