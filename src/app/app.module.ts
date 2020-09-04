import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddupdateeventsComponent } from './Components/addupdateevents/addupdateevents.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { EventComponent } from './Components/event/event.component';
import { ModalComponent } from './Components/modal/modal.component';
import { EventdetailsComponent } from './Components/eventdetails/eventdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    AddupdateeventsComponent,
    EventListComponent,
    EventComponent,
    ModalComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
