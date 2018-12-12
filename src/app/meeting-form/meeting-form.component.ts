import { Component, OnInit } from '@angular/core';

import { MeetingHandlerService } from '../meeting-handler.service';
import { TIMES, MINUTES } from './mock-values';

@Component({
  selector: '[app-meeting-form]',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss']
})

export class MeetingFormComponent implements OnInit {
  employees;
  suggestions;
  search_input = "";
  times = TIMES;
  minutes = MINUTES;
  employee_id = "";
  from_date = "";
  to_date = "";
  office_hour_start = "";
  office_hour_end = "";
  meeting_duration = "";
  errorMsg;

  constructor(private _meetingService: MeetingHandlerService) { }

  ngOnInit(){}

  searchEmployees() {
    this._meetingService.getListOfEmployees(this.search_input).subscribe(
      res => this.employees = res["matches"],
      error => this.errorMsg = error)
  }

  submitMeetingRequirements() {
    this._meetingService.submitMeetingRequirements(
      this.employee_id,
      this.from_date,
      this.to_date,
      this.office_hour_start,
      this.office_hour_end,
      this.meeting_duration)
      .subscribe(res => {
        this.suggestions = res["suggestions"];
    })
  }
}
