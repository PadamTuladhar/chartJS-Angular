import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.css']
})
export class DynamicChartComponent implements OnInit {
  myChart: any;
  disablePrevBtn: Boolean = true;
  disableNextBtn: Boolean = false;
  week: string[] = [];
  weekDatapoints: number[] = [];

  data = {
    labels: this.week,
    datasets: [{
      label: 'Weekly Data',
      data: this.weekDatapoints,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  weekData(start: any, end: any) {
    const startScale = this.myChart.config.options.scales.x.min + start;
    const endScale = this.myChart.config.options.scales.x.max + end;
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');

    this.myChart.config.options.scales.x.min = startScale;
    this.myChart.config.options.scales.x.max = endScale;

    this.disablePrevBtn = false;
    this.disableNextBtn = false;

    if (startScale < 0) {
      this.myChart.config.options.scales.x.min = 0;
      this.myChart.config.options.scales.x.max = 6;
      this.disablePrevBtn = true;
    }

    if (endScale > this.week.length) {
      this.myChart.config.options.scales.x.min = this.week.length - 6;
      this.myChart.config.options.scales.x.max = this.week.length - 1;
      this.disableNextBtn = true;
    }

    this.myChart.update();
  };

  ngOnInit(): void {
    for (let i = 1; i <= 52; i++) {
      this.week.push(`Week ${i}`);
      this.weekDatapoints.push(i)
    }

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
            min: 8,
            max: 14,
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
  declarations: [DynamicChartComponent],
  imports: [CommonModule],
  exports: []
})

export class DynamicChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<DynamicChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(DynamicChartComponent);
  }
}
