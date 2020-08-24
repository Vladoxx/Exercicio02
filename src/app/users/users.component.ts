import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(usersServ: UsersService) { 
    usersServ.getTodos().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  ngOnInit(): void {
  }

}
