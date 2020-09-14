import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {
    username: '',
    password: ''
  };
  constructor(private http: HttpClient
  ) { }

  login() {
    this.http
      .post<any>(`http://localhost:8080/login`, this.model)
      .subscribe(success => {
        console.log(success);
      });
  }

}
