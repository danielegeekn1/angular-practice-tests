import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('red');
  }
  changeColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
