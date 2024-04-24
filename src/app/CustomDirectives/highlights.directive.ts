import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
  standalone: true,
})
export class HighlightsDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight-product');
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight-product');
  }
}
