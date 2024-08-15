import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filter(event:Event){
    let text = (event.target as HTMLInputElement).value;
    this.filterValue.emit(text);

  }

  sortUp(){
    console.log('sorting up')
  }

  sortDown(){
    console.log('sorting down')
  }

}
