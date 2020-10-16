import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role, User, UserWithRole } from './users.interface';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly http: HttpClient) { }

  get(): Observable<UserWithRole[]> {
    const users = this.http.get<{ users: User[] }>(environment.services.users)
    const roles = this.http.get<{ roles: Role[] }>(environment.services.roles)

    return zip(
      users, roles
    ).pipe(
      map(([{ users }, { roles }]) =>
        users.map((user) =>
          ({ ...user, role: roles.find((role) => role.id === user.roleId).position })
        )
      )
    )
  }
}
