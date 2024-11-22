import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {
  private defaultColor = 'blue';
  private hoverColor = 'green';
  private clickColor = 'yellow';

  // HostBinding to bind the background color style of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  // HostBinding to bind a class to the host element
  @HostBinding('class.active') isActive: boolean = false;

  // HostBinding to bind an attribute to the host element
  @HostBinding('attr.aria-label') ariaLabel: string = 'default label';

  constructor() {}

  // HostListener to listen for mouseenter events and change background color
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.hoverColor;
    this.ariaLabel = 'Hovered!';
  }

  // HostListener to listen for mouseleave events and revert background color
  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
    this.ariaLabel = 'default label';
  }

  // HostListener to listen for click events and change background color and class
  @HostListener('click')
  onClick() {
    this.backgroundColor = this.clickColor;
    this.isActive = !this.isActive;
    this.ariaLabel = 'Clicked!';
  }

  // HostListener to listen for double click events and reset everything
  @HostListener('dblclick')
  onDoubleClick() {
    this.backgroundColor = this.defaultColor;
    this.isActive = false;
    this.ariaLabel = 'Double Clicked!';
  }
}
