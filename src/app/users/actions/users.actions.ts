import { createAction, props } from '@ngrx/store';
import { UserWithRole } from '../users.interface';

export const loadUsers = createAction(
  '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: UserWithRole[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);
