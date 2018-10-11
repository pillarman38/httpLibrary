import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Users} from './interfaces/user';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})

export class UsersResolver implements Resolve<any>{

    users: Users;

    constructor(private http: UsersService){}

    resolve(router: ActivatedRouteSnapshot){
      console.log("calling users resolver");
      return this.http.getStuff(router.params.id)
      }
    }
