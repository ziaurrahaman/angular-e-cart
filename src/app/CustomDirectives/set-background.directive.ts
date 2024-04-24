import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class SetBackgroundDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  // @Input()
  // backColor: string = '#36454F';

  // @Input()
  // textColor: string = 'white';

  @Input('setBackground') bacAndTextColorObj = {
    backColor: '#36454F',
    textColor: 'white',
  };

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.bacAndTextColorObj.backColor
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'color',
      this.bacAndTextColorObj.textColor
    );
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
    // this.elementRef.nativeElement.style.color = 'white';
  }
}
