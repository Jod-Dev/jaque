import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserBannerComponent } from './user-banner/user-banner.component';

import { UsersEffects } from './effects/users.effects';
import * as fromUsers from './reducers/users.reducer';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { UserIconComponent } from './user-icon/user-icon.component';
import { SearchPipe } from './pipes/search.pipe';
import { RangePipe } from './pipes/range.pipe';


@NgModule({
  declarations: [UsersComponent, UserListComponent, UserBannerComponent, UserIconComponent, EllipsisPipe, PaginationPipe, SearchPipe, RangePipe],  
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer)
  ],
})
export class UsersModule { }
