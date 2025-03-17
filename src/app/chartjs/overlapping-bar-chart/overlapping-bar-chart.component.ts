import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-overlapping-bar-chart',
  templateUrl: './overlapping-bar-chart.component.html',
  styleUrls: ['./overlapping-bar-chart.component.css']
})
export class OverlappingBarChartComponent implements OnInit {

  myChart: any
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Red Bar',
      data: [6, 19, 13, 15, 12, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
      categoryPercentage: 0.5,
      order: 0,
    }, {
      label: 'Orange Bar',
      data: [5, 15, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      order: 1
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
        scales: {
          x: {
            stacked: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

}

@NgModule({
  declarations: [OverlappingBarChartComponent],
  imports: [CommonModule],
  exports: []
})

export class OverlappingBarChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<OverlappingBarChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(OverlappingBarChartComponent);
  }
}
