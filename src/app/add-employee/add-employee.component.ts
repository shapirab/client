import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() employee: Employee | undefined;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.activeModal.close();
  }

}
