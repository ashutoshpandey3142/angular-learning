import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashkickPageComponent } from './new-cashkick-page.component';

describe('NewCashkickPageComponent', () => {
  let component: NewCashkickPageComponent;
  let fixture: ComponentFixture<NewCashkickPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCashkickPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCashkickPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
