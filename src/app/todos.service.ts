import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http: HttpClient) { }

  getStuff(res){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
