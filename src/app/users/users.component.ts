import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Object;

  constructor(private http: UsersService, private actr:ActivatedRoute) { }
  
  ngOnInit() {
      this.users = this.actr.snapshot.data['location']
    }
  }

