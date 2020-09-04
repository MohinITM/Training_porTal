import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { EventData } from '../../Models/event.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { }
  allCurrentEvents = [];
  eventInfo: EventData;
  openAddUpdateWindow = false;
  searchText = '';
  sendSearchString = null;
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.dataService.getAllEvents().subscribe((events: EventData[]) => {
      this.allCurrentEvents = events;
      console.log(this.allCurrentEvents);
    });
  }

  addUpdateWindow() {
    this.openAddUpdateWindow = true;
  }

  closeModalWindow(event) {
    if (event === 'close') {
      this.openAddUpdateWindow = false;
    }
  }

  searchEvent(text) {
    this.allCurrentEvents = this.dataService.getFilteredEvents(text);
    // this.dataService.passSearchName(text);
    this.sendSearchString = this.searchText === '' ? null : this.searchText.toLocaleLowerCase();
  }

}
