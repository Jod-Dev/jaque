import { Action, createReducer, on } from '@ngrx/store';
import { UserWithRole } from '../users.interface';
import * as UsersActions from '../actions/users.actions'
import { state } from '@angular/animations';


export const usersFeatureKey = 'users';

export type State = UserWithRole[]

export const initialState: State = []

export const selectUsers = (state: { users: State}) => [...state.users]

export const reducer = createReducer(
  initialState,
  on(UsersActions.loadUsersSuccess, (_, { users }) => users)
);

