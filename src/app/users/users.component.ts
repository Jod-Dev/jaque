import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { selectUsers, State } from './reducers/users.reducer';
import { UserWithRole } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  users$: Observable<UserWithRole[]>;

  constructor(private readonly store: Store<{ users: State }>) { 
    this.users$ = this.store.select(selectUsers);
  }
}
