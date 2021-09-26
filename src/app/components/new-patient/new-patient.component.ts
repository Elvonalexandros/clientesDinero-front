import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  datepicker: DatepickerComponent;
  model!: NgbDateStruct;
  constructor(datepicker: DatepickerComponent) {
    this.datepicker = datepicker;
  }

  ngOnInit(): void {
    this.model = this.datepicker.model
  }



}
