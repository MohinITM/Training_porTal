import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from '../../Models/event.model';
import { DataService } from '../../Services/data.service';
@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss']
})
export class EventdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  selectedEvenInfo: EventData;
  id: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.eventId;
      console.log('id', this.id);
   });

    this.getSelectedEvent(this.id);
  }


  getSelectedEvent(id) {
    this.selectedEvenInfo = this.dataService.getSingleEvent(id);
  }

}
