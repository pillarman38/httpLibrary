import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  users: Object;

  constructor(private http: TodosService, private actr: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.actr.snapshot.data['user']
    console.log(this.users);
  }
}
