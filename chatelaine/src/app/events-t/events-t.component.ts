import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { User } from '../user';

@Component({
  selector: 'app-events-t',
  templateUrl: './events-t.component.html',
  styleUrls: ['./events-t.component.css']
})
export class EventsTComponent implements OnInit {

  loggedInUser:User;
  events : Event[];

  constructor(private es:EventService, private authservice: AuthService) {
    this.loggedInUser = authservice.loggedInUser;
   }

  ngOnInit(): void {
    this.getEventsByParticipant();
  }

  getEventsByParticipant(){
    this.es.getEventsByParticipant(this.loggedInUser).subscribe(
      (response: Event[]) => {
        this.events = response;
      }
    )
  }

}
