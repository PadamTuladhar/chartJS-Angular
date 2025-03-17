import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
  myChart: any;
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Temperature in C',
      data: [
        [8, 12],
        [9, 16],
        [6, 9],
        [4, 10],
        [3, 12],
        [9, 2]
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
      borderSkipped: false
    }]
  };
  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
@NgModule({
  declarations: [HorizontalBarChartComponent],
  imports: [CommonModule],
  exports: []
})

export class HorizontalBarChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<HorizontalBarChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(HorizontalBarChartComponent);
  }
}