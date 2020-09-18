import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) {}

  getAllTickets() {
    return this.http.get<Ticket[]>('http://localhost:8080/ticket');
  }

  getTicketsByStatus(sId:number){
    return this.http.get<Ticket[]>('http://localhost:8080/ticket/'+sId);
  }

  getTicket(id:number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/ticket/'+id+'/');
  }

  addTicket(t:Ticket): Observable<Ticket[]> {
    console.log(t);
    return this.http.post<Ticket[]>('http://localhost:8080/ticket', t);
  }

  getUser(id:number) {
    return this.http.get<User>('http://localhost:8080/ticket/'+id+'/');
  }
}
