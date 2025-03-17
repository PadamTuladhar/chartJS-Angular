import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gradient-background',
  templateUrl: './gradient-background.component.html',
  styleUrls: ['./gradient-background.component.css']
})
export class GradientBackgroundComponent implements OnInit {
  myChart: any;

  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      // backgroundColor: [
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)'
      // ],
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ]

        if (context.chart.chartArea) {
          const { ctx, data, chartArea: { top, bottom } } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          const colorLayers = 1 / (bgColor.length - 1);
          for (let i = 0; i < bgColor.length; i++) {
            gradientBg.addColorStop(0 + i * colorLayers, bgColor[i]);
          }

          return gradientBg;
        }
      },
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      pointBackgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true
    }]
  };

  ngOnInit(): void {
    this.myChart = new Chart("myChart", {
      type: 'line',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}

@NgModule({
  declarations: [GradientBackgroundComponent],
  imports: [CommonModule],
  exports: []
})

export class GradientBackgroundModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<GradientBackgroundComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(GradientBackgroundComponent);
  }
}
