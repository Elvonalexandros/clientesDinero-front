import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'appBootstrap';

  model: string | undefined;

  constructor() {}


}
