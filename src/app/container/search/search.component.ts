import { NgClass, NgIf } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  onSearchTextChange() {
    this.searchTextChangeEvent.emit(this.searchText);
  }
  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChangeEvent.emit(this.searchText);
    // console.log('searchTextIs', this.searchText);
  }
}
