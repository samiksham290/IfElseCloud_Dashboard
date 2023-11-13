import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/shared.type';

@Component({
  selector: 'app-data-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.scss']
})
export class DataCardsComponent {

  @Input('data') cards: Card[] = [];

  icons = ['fa-music','fa-house', 'fa-download', 'fa-arrows-rotate']

  constructor() { }

  ngOnChanges(): void {
    console.log('cards', this.cards);
  }

}
