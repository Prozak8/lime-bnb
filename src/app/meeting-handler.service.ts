import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingHandlerService {
  private meetingUrl = 'https://stark-castle-84894.herokuapp.com'

  constructor(private _httpClient: HttpClient) {}

  getListOfEmployees(query: string = '') {
    return this._httpClient.get(`${this.meetingUrl}/employees?q=${query}`)
      .pipe(catchError(this.errorHandler));
  } 

  submitMeetingRequirements(employee_id: string = '',
                            from_date: string = '',
                            to_date: string = '',
                            office_hour_start: string = '',
                            office_hour_end: string = '',
                            meeting_length: string = '') {
                              
    return this._httpClient.get(`${this.meetingUrl}/suggestions?employees=${employee_id}&fromDate=${from_date}&toDate=${to_date}&officehoursStart=${office_hour_start}%3A00&officehoursEnd=${office_hour_end}%3A00&meetingLength=${meeting_length}`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error")
  }
}