import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashKickFormComponent } from './cash-kick-form.component';

describe('CashKickFormComponent', () => {
  let component: CashKickFormComponent;
  let fixture: ComponentFixture<CashKickFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashKickFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashKickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
