import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { EventData } from '../../Models/event.model';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, AfterViewInit {

  @Input() sEvent: EventData;
  @Input() searchedText;
  eventToDIsplay: EventData;
  constructor(private dataService: DataService) { }
  openAddUpdateWindow = false;
  highlightText = null;
  ngOnInit() {
    this.eventToDIsplay = this.sEvent;
    // this.getSearchText();
    console.log('text', this.searchedText);
    console.log('value', this.eventToDIsplay.name.toLocaleLowerCase().includes(this.searchedText));
  }

  // async getSearchText() {
  //   await this.dataService.searchName.toPromise().then((text: string) => {
  //     if (text === '') {
  //       this.searchedText = null;
  //     } else {
  //       this.searchedText = text;
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  updateEvent(event: any) {
    event.stopPropagation();
    this.openAddUpdateWindow = true;
  }

  closeModalWindow(event) {
    if (event === 'close') {
      this.openAddUpdateWindow = false;
    }
  }

  ngAfterViewInit() {

  }

}
