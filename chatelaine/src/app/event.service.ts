import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url:string = "http://localhost:8080/chatelaine/"

  constructor(private http:HttpClient) { 
  }

  getAllEvents() {
    return this.http.get<Event[]>(this.url+'event');
  }

  getEventsByParticipant(user:User) {
    return this.http.get<Event[]>(this.url+user.userID);
  }

  getEventsByDate(date:Date) {
    return this.http.get<Event[]>(this.url+date);
  }
}
