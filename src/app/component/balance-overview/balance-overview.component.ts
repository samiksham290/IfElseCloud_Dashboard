import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-balance-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent implements OnInit {

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;

  constructor() { }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Income",
            data: [47, 119, 60, 45, 35, 100, 45, 10, 65, 121, 75, 35],
            backgroundColor: [
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
              "#506de2",
            ],
            borderColor: [],
            borderWidth: 0,
            barThickness: 6,
            pointRadius: 8
          },
          {
            label: "Borrow",
            data: [10, 19, 15, 15, 8, 19, 12, 3, 11, 14, 17, 10],
            backgroundColor: [
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc",
              "#c4cdfc"
            ],
            borderColor: [],
            borderWidth: 0,
            barThickness: 6,
            pointRadius: 8
          }
        ]
      },
      options: {
        legend: {
          position: 'top',
          align: 'end'
        },
        scales: {
          xAxes: [{
            
            gridLines: {
                display: false // Hide vertical grid lines
            },
            stacked: true
        }],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 50, // Set the step size to 50
                min: 0
              },
              stacked: true
            }
          ]
        }
      }
    });
  }
  ngOnInit(): void {
   
  }

}
