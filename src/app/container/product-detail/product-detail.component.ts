import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { NgFor, NgIf } from '@angular/common';
import { SetBackgroundDirective } from '../../CustomDirectives/set-background.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';
import { DisableProductDirective } from '../../CustomDirectives/disable-product-directive.directive';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SetBackgroundDirective,
    AppHoverDirective,
    DisableProductDirective,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input()
  productListComp: ProductListComponent = undefined;

  product: Product;
  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct;
  }
}
