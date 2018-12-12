import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-meeting-suggestion]',
  templateUrl: './meeting-suggestion.component.html',
  styleUrls: ['./meeting-suggestion.component.scss']
})
export class MeetingSuggestionComponent implements OnInit {
  @Input() suggestion: any;
  
  constructor() { }

  ngOnInit() {}
}
