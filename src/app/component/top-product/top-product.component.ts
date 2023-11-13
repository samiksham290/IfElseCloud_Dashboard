import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-top-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  
  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Men','Eletronice', 'women'],
        datasets: [
          { 
            data: [14,15, 21],
            backgroundColor: ['#4758cc','#5969de', '#6f81eb' ],
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            "fontSize": 12,
          }
        },
        tooltips:{
          enabled:true
        },
        cutoutPercentage: 75,
        aspectRatio:1.53
      }
    });
  }

}
