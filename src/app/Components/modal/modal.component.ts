import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { EventData } from '../../Models/event.model';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() eventInfo: EventData;
  @Output()  closeModal = new EventEmitter();
  @ViewChild('modalBackdrop', {static: true}) modalBackdrop: ElementRef;
  buttonText = 'Add';
  AddedEventInfo: EventData;
  fsubmitted: boolean = false;
  eventForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    department: ['', Validators.required],
    duration: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    date: ['', Validators.required],
    meetingRoom: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    if(this.eventInfo) {
      this.buttonText = 'Update';
      this.eventForm.patchValue({
        name: this.eventInfo.name,
        description: this.eventInfo.description,
        department: this.eventInfo.department,
        duration: this.eventInfo.duration,
        date: this.eventInfo.date,
        meetingRoom: this.eventInfo.meetingRoom
      });
    }
  }

  get ef() {
    return this.eventForm.controls;
  }

  closeModalWindow(event: any) {
    event.stopPropagation();
    this.closeModal.emit('close');
  }

  closeModalOnClick(event: any) {
    event.stopPropagation();
    if (event.target.id === 'myModal') {
      this.closeModal.emit('close');
    }
  }

  submitForm(event: any) {
    event.stopPropagation();
    this.fsubmitted = true;
    if(this.eventForm.invalid) {
      return;
    }

    this.AddedEventInfo = this.eventForm.value;
    if (this.buttonText === 'Add') {
      this.dataService.addNewEvent(this.AddedEventInfo);
    } else {
      this.AddedEventInfo.id = this.eventInfo.id;
      this.dataService.updateEvent(this.AddedEventInfo);
    }
    this.closeModal.emit('close');
  }

  generateId() {
    return btoa(Math.random().toString()).substring(0,10)
  }
}
