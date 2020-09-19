import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  


  constructor(private http: HttpClient) {}

  getAllTickets() {
    return this.http.get<Ticket[]>('http://localhost:8080/chatelaine/ticket');
  }

  getTicketsByStatus(sId:number){
    return this.http.get<Ticket[]>('http://localhost:8080/chatelaine/ticket/'+sId);
  }

  getTicketsByAuthor(user:User) {
    return this.http.get<Ticket[]>('http://localhost:8080/chatelaine/ticket/user/'+user);
  }

  getTicket(id:number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/chatelaine/ticket/'+id+'/');
  }

  addTicket(t:Ticket): Observable<Ticket[]> {
    console.log(t);
    return this.http.post<Ticket[]>('http://localhost:8080/chatelaine/ticket', t, this.httpOptions);
  }

  getUser(id:number) {
    return this.http.get<User>('http://localhost:8080/chatelaine/ticket/'+id+'/');
  }
}
