import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() mycolor = '';

  constructor(private el: ElementRef) {
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.mycolor);
    this.el.nativeElement.innerHTML = 'welcome to anguar program';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.el.nativeElement.innerHTML = 'hii gopikannan';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
