import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveBrakpointsComponent } from './responsive-brakpoints.component';

describe('ResponsiveBrakpointsComponent', () => {
  let component: ResponsiveBrakpointsComponent;
  let fixture: ComponentFixture<ResponsiveBrakpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveBrakpointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsiveBrakpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
