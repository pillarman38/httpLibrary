import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent }from './todos/todos.component';
import { UsersResolver } from './userRes.service';
import { TodosService } from './todos.service';

export const routes:Routes = [


{path: 'user/:id', component: UsersComponent, resolve: {appResolver: UsersResolver}},
{path: 'todos', component: UsersComponent, resolve: {appResolver: TodosService}},

{path: '**', redirectTo: './home'}]