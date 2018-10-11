import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getStuff(res){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
    .pipe(map(res => res),
    tap(res => console.log(res)))
    
  }
}
