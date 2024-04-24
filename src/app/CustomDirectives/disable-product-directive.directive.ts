import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dissableProduct]',
  standalone: true,
})
export class DisableProductDirective {
  constructor(private elmRef: ElementRef, private renderer: Renderer2) {}

  @Input() set dissableProduct(disable: boolean) {
    if (disable) {
      this.renderer.addClass(
        this.elmRef.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
