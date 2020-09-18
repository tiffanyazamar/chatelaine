import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../maintenance.service';
import { Ticket } from '../ticket';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-maintenance-t',
  templateUrl: './maintenance-t.component.html',
  styleUrls: ['./maintenance-t.component.css']
})
export class MaintenanceTComponent implements OnInit {

  tickets: Ticket[];
  newTicketDesc: string;
  statusId: number;
  newTicketId: number;
  userId: number;

  constructor(private ms: MaintenanceService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getTickets();
  }
  getTickets() {
    this.ms.getAllTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
      }
    )
  }

  sendTicket() {
    let t = new Ticket(0, this.newTicketDesc, Date.now(), null, this.authService.loggedInUser, this.statusId)
    this.ms.addTicket(t).subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
      }
    )
  }

  // sendTicket() {
  //   this.ms.getTicket(this.newTicketId).pipe(
  //     switchMap( (ticket:any) => this.ms.getUser(this.userId).pipe(
  //       map( (u: User) => ({u, ticket}))
  //     ))
  //   ).pipe(
  //     switchMap( ({u, ticket}) => this.ms.addTicket(new Ticket(0, this.newTicketDesc, Date.now(), null, u, this.statusId)).pipe(
  //       map( allUsers => ({u, ticket, allUsers}))
  //     ))
  //   ).subscribe( ({u, ticket, allUsers})) => {
  //     this.users = allUsers;
  //   }
  // }



}
