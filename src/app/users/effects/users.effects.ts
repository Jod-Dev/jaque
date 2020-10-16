import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { concatMap, filter, map, mapTo, mergeMap, tap } from 'rxjs/operators';
import { UsersService } from '../users.service';
import * as UserActions from '../actions/users.actions'
import { routerNavigatedAction } from '@ngrx/router-store';



@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private readonly users: UsersService) { }

  @Effect()
  requestLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigatedAction),
      filter(action => action.payload.event.url === '/users'),
      mapTo(UserActions.loadUsers())
    )
  )

  @Effect()
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() => this.users.get()),
      map((users) => UserActions.loadUsersSuccess({ users }))
    )
  )
}
