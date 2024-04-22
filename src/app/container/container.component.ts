import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [
    SearchComponent,
    NgFor,
    ProductListComponent,
    ProductDetailComponent,
    NgIf,
    FeaturedBrandsComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Shojol', 'Hrittik', 'Adnan', 'Hasib'];
  searchText: string = '';
  setSearchText(evnet: string) {
    console.log('searchedKeywordIs', evnet);
    this.searchText = evnet;
  }

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;
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
