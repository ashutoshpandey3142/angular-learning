import { Component, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  imports: [ 
    MatSliderModule,
    MatCardModule,
    FormsModule,
  ]
})
export class SliderComponent {
  @Input() max: number = 5;
  @Input() sliderValue: number = 1;
}
