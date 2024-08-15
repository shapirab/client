import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filterByIdValue = new EventEmitter<string>();
  @Output() filterByNameValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onFilterByIdChange(event:string){
    this.filterByIdValue.emit(event);
  }

  onFilterByNameChange(event:string){
    this.filterByNameValue.emit(event);
  }
}
