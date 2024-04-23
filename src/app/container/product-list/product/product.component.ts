import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';
import { HighlightsDirective } from '../../../CustomDirectives/highlights.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle, NgIf, HighlightsDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product;
}
