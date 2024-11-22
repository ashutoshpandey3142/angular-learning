import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {

  // Always used in ngOnInit
  @Input() myColor = "";

  @Input() appendText = "";
  constructor(private ele: ElementRef) { 
    // this.ele.nativeElement.style.color="red";
    this.ele.nativeElement.style.backgroundColor="pink";
    this.ele.nativeElement.style.border="1px solid #ddd";
    this.ele.nativeElement.style.padding="10px";
    this.ele.nativeElement.style.borderRadius="8px";
    // this.ele.nativeElement.innerHTML="Append Text";
  }

  ngOnInit() {
    // Initialize everything that is written here before loading the angular
    this.ele.nativeElement.style.color=this.myColor;
    // this.ele.nativeElement.innerHTML=this.appendText;


    this.ele.nativeElement.classList.add('card-success');
  }
}
