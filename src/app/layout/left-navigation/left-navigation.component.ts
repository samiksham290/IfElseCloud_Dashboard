import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  navigations = ['fa-home', 'fa-clock', 'fa-laptop', 'fa-lemon', 'fa-rss', 'fa-handcuffs', 'fa-chart-line']

  constructor() { }

  ngOnInit(): void {
  }

}
