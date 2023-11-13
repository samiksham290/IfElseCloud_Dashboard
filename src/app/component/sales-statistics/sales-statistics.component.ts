import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, Point } from 'chart.js';

@Component({
  selector: 'app-sales-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-statistics.component.html',
  styleUrls: ['./sales-statistics.component.scss'],
})
export class SalesStatisticsComponent {
  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  private readonly data: Point[] = [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 6 },
    { x: 4, y: 2 },
    { x: 4.1, y: 6 },
  ];

  dataFirst = {
    label: 'Car A - Speed (mph)',
    data: [5, 13, 15, 13, 20, 28, 38],
    lineTension: 0.2,
    fill: false,
    borderColor: '#506de2',
  };

  dataSecond = {
    label: 'Car B - Speed (mph)',
    data: [5, 10, 12, 10, 17, 20, 30],
    lineTension: 0.2,
    fill: false,
    borderColor: '#7982a0',
  };

  speedData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [this.dataFirst, this.dataSecond],
  };

  constructor() {}

  chartOptions: Chart.ChartOptions = {
    legend: {
      display: false,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black',
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return '$' + value;
            },
          },
        },
      ],
    },
  };

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: this.speedData,
      options: this.chartOptions,
    });
  }
}
