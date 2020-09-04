import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() scheduledEvents;
  @Input() searchedText;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToEventInfo(eventObj) {
    this.router.navigate(['/event-info', eventObj.id]);
  }
}
