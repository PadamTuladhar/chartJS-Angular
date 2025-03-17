import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-custom-scale-title',
  templateUrl: './custom-scale-title.component.html',
  styleUrls: ['./custom-scale-title.component.css']
})

export class CustomScaleTitleComponent implements OnInit {
  myChart: any;
  color = 'rgba(75, 192, 192, 1)';
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [
        { x: 3, y: 3 },
        { x: 6, y: 3 },
        { x: 9, y: 4.5 },
        { x: 12, y: 6 },
        { x: 15, y: 6 },
        { x: 9, y: 4.5 },
        { x: 6, y: 3 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: this.color,
      borderWidth: 1
    }]
  };

  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'scatter',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Total Sales',
              color: this.color
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Total Sales Agents'
            }
          }
        }
      }
    });
  }

}

@NgModule({
  declarations: [CustomScaleTitleComponent],
  imports: [CommonModule],
  exports: []
})

export class CustomScaleTitleModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<CustomScaleTitleComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(CustomScaleTitleComponent);
  }
}
