import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter, ignoreElements, tap } from 'rxjs/operators';

export type Mode = 
  'LIST' |
  'CARDS'

export type Type = 
  'IMAGE' |
  'BOOLEAN'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
  
})
export class UserListComponent implements AfterViewInit, OnDestroy {
  @ViewChild('search', {static: true}) search: ElementRef<HTMLInputElement>;
  search$: Subscription
  keyword: string

  @Input() mode: Mode = 'LIST';

  @Input() pagination = 8
  @Input() page = 0
  pages: number

  @Input() users = []
  @Input() headers = [
    { text: 'Foto', value: 'picture', type: 'IMAGE' },
    { text: 'Nombre', value: 'name' },
    { text: 'Apellido Paterno', value: 'fathersLastName' },
    { text: 'Apellido Materno', value: 'mothersLastName' },
    { text: 'Correo', value: 'email' },
    { text: 'Rol', value: 'role' },
    { text: 'Estado', value: 'active', type: 'BOOLEAN' },
  ]

  next() {
    this.page++
  }

  back() {
    this.page--
  }

  ngAfterViewInit(): void {
    this.search$ = 
      fromEvent(this.search.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(500),
          tap(() =>
            this.keyword = this.search.nativeElement.value
          ), 
          ignoreElements(),
        )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe()
  }
}
