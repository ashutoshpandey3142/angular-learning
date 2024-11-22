import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliderValuePipe',
  standalone: true
})
export class SliderValuePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `Value: ${value}`;
  }
}
