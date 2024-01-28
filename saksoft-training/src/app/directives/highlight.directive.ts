import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() mycolor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor="gray";
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.mycolor);
    this.el.nativeElement.innerHTML = 'welcome to anguar program';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.el.nativeElement.innerHTML = 'This section walks you through creating a highlight directive that sets the background color of the host element to yellow.';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
