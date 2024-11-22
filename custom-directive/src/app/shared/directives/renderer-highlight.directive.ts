import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective {
  
  // renderer -> use to change the behavior of the dom element
  constructor(private ele: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // Initially setting a default style to the element
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', '#ddd');
  }
  
  // HostListener to listen to mouseenter event
  @HostListener('mouseenter') 
  onMouseOver(event: Event) {
    // Change background color to green when mouse enters the element
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'green');
  }

  // HostListener to listen to mouseleave event
  @HostListener('mouseleave')
  onMouseLeave(event: Event) {
    // Revert background color to default when mouse leaves the element
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', '#ddd');
  }

  // HostListener to listen to click event
  @HostListener('click')
  onClick(event: Event) {
    // Change background color to yellow when the element is clicked
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'yellow');
    // Additional actions on click (e.g., adding a class)
    this.renderer.addClass(this.ele.nativeElement, 'clicked');
    // Create a new span element and append it to the host element
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText('Clicked!');
    this.renderer.appendChild(span, text);
    this.renderer.appendChild(this.ele.nativeElement, span);
  }

  // HostListener to listen to double click event
  @HostListener('dblclick')
  onDoubleClick(event: Event) {
    // Remove the 'clicked' class on double-click
    this.renderer.removeClass(this.ele.nativeElement, 'clicked');
    // Set the element's text content to 'Double Clicked!'
    this.renderer.setProperty(this.ele.nativeElement, 'innerHTML', 'Double Clicked!');
  }
}
