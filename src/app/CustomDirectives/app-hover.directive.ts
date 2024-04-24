import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class AppHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.border = '#282828 2px solid';
    this.textColor = '#282828';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '#282828';
    this.border = 'none';
    this.textColor = 'white';
  }
}
