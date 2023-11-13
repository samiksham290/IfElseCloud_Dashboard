import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/shared.type';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input('data') users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('Users', this.users);
  }
}
