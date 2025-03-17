import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  myChart: any;
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
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
            grid: {
              color: (context) => {
                if (context.index === 3) {
                  return 'rgba(75, 192, 192, 1)';
                } else {
                  return 'rgba(0, 0, 0, 0.1)';
                }
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: (context) => {
                return 'rgba(75, 192, 192, 1)';
              }
            }
          }
        }
      }
    });
  }
}

@NgModule({
  declarations: [CustomGridComponent],
  imports: [CommonModule],
  exports: []
})

export class CustomGridModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<CustomGridComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(CustomGridComponent);
  }
}
