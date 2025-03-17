import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';

@Component({
  selector: 'app-custom-tick',
  templateUrl: './custom-tick.component.html',
  styleUrls: ['./custom-tick.component.css']
})

export class CustomTickComponent implements OnInit {
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
      ],
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
          y: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 30
            }
          }
        }
      }
    });
  }
}

@NgModule({
  declarations: [CustomTickComponent],
  imports: [CommonModule],
  exports: []
})

export class CustomTickModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<CustomTickComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(CustomTickComponent);
  }
}
