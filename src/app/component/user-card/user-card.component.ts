import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/shared.type';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input('active') active = false;
  @Input('data') user: User = {
    country: '',
    id: '',
    isActive: false,
    name: '',
    picture: '',
    progress: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
  }

}
