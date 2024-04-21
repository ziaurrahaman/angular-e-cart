import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, NgFor, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Shojol', 'Hrittik', 'Adnan', 'Hasib'];
  // addToCart = 0;
  // name = 'Jhon Smith';
  // product = {
  //   name: 'iPhone 13',
  //   price: 999,
  //   color: 'Matte Black',
  //   discountPercentage: 10,
  //   inStock: 9,
  //   imagePath: 'assets/images/iphone.png',
  // };
  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }
  // getDiscountPrice() {
  //   return (
  //     this.product.price -
  //     (this.product.price * this.product.discountPercentage) / 100
  //   );
  // }
  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
  // decrementCartValue() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }
}
