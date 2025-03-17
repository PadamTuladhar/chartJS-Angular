import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linesegment-styling',
  templateUrl: './linesegment-styling.component.html',
  styleUrls: ['./linesegment-styling.component.css']
})
export class LinesegmentStylingComponent implements OnInit {
  myChart: any;
  myChart2: any;

  down = (ctx: any, value: any) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

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
      tension: 0.4,
      segment: {
        borderColor: (ctx: any) => this.down(ctx, 'rgba(255, 99, 132, 1)') || 'rgba(75, 192, 192, 1)',
        borderDash: (ctx: any) => this.down(ctx, [2, 10]),
      }
    }]
  };

   color = 'Yellow';
   colorLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
   dash = (ctx, value) => ctx.p0DataIndex < this.colorLabels.indexOf(this.color) ? value : [6, 0];

   dottedData = {
    labels: this.colorLabels,
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
      tension: 0.4,
      segment: {
        //borderDash: [6, 6]
        borderDash: ctx => this.dash(ctx, [6, 6]) || [6, 0]
      }
    }]
  };

  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
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
    });

    this.myChart2 = new Chart('myChart2', {
      type: 'line',
      data: this.dottedData,
      options: {
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
  declarations: [LinesegmentStylingComponent],
  imports: [CommonModule],
  exports: []
})

export class LineSegmentStylingModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<LinesegmentStylingComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LinesegmentStylingComponent);
  }
}
