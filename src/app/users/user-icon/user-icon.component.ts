import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.sass']
})
export class UserIconComponent {
  @Input() icon: string
} 
