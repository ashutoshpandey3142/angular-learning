import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-summary-box',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, SliderComponent, MatCardModule],
  templateUrl: './summary-box.component.html',
  styleUrl: './summary-box.component.css'
})
export class SummaryBoxComponent {
  @Input() selectedContracts: any[] = []
  termLength: string = '';
  reset () {
    console.log(this.selectedContracts)
    this.selectedContracts = []
  }
  get totalPayable() {
    return this.selectedContracts.reduce((total, contract) => {
      return total + parseFloat(contract.paymentAmount || '0');
    }, 0);
  }

  get paybackAmount() {
    return this.totalPayable * 1.1;
  }

  get rate() {
    return this.selectedContracts.reduce((total, contract) => {
      return total + parseFloat(contract.termFees || '0');
    }, 0) / this.selectedContracts.length;
  }

  reviewYourCredit() {
    console.log(this.selectedContracts)
    console.log('Reviewing credit...');

  }

}
