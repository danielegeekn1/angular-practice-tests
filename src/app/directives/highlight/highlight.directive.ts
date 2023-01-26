import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.appHighlight || this.defaultColor || 'purple');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('red');
  }
  changeColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
