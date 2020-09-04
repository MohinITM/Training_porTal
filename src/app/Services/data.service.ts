import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, } from 'rxjs';
import { EventData } from '../Models/event.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  allEvents: EventData[] = [
    {
      name: 'Angular',
      description: 'Angular tutorial',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '5',
      id: 1,
    },
    {
      name: 'Vue',
      description: 'Vuejs tutorial',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '5',
      id: 2,
    },
    {
      name: 'Audit',
      description: 'Company auditing information',
      department: 'Accounting',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '3',
      id: 3,
    },
    {
      name: 'React',
      description: 'React tutorial',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '5',
      id: 4,
    }
  ];

  streamAllEvents = new BehaviorSubject<any>(this.allEvents);
  searchName = new Subject<any>();

  getAllEvents() {
    return this.streamAllEvents;
  }

  getSingleEvent(id) {
    return this.allEvents.find((event) => {
      return event.id == id;
    });
  }

  addNewEvent(newEvent) {
    newEvent.id = this.allEvents.length + 1;
    this.allEvents.push(newEvent);
    this.streamAllEvents.next(this.allEvents);
  }

  updateEvent(newEvent: EventData) {
    const elementsIndex = this.allEvents.findIndex(element => element.id === newEvent.id );
    this.allEvents[elementsIndex] = {
      ...this.allEvents[elementsIndex], ...newEvent
    };
    this.streamAllEvents.next(this.allEvents);
  }

  passSearchName(searchString) {
    this.searchName.next(searchString);
  }

  getFilteredEvents(searchString) {
    return this.allEvents.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
    })
  }


}
