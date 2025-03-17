import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-waterfall-chart',
  templateUrl: './waterfall-chart.component.html',
  styleUrls: ['./waterfall-chart.component.css']
})
export class WaterfallChartComponent implements OnInit {
  myChart: any;
  barColorCode() {
    return (ctx: any) => {
      const start = ctx.parsed._custom.start;
      const end = ctx.parsed._custom.end;
      let barColor = start <= end ? 'rgba(75, 192, 192, 1)'
        : start > end ? 'rgba(255, 99, 132, 1)'
          : 'black';

      if (ctx.dataIndex === 0 || ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1) {
        barColor = 'rgba(0, 0, 0, 1)'
      }

      return barColor;
    }
  }

  barBackgroundColorCode() {
    return (ctx: any) => {
      const start = ctx.parsed._custom.start;
      const end = ctx.parsed._custom.end;
      let barColor = start <= end ? 'rgba(75, 192, 192, 0.2)'
        : start > end ? 'rgba(255, 99, 132, 0.2)'
          : 'rgba(0, 0, 0, 0.2)';

      if (ctx.dataIndex === 0 || ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1) {
        barColor = 'rgba(0, 0, 0, 0.2)'
      }

      return barColor;
    }
  }

  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black', 'Next Color'],
    datasets: [{
      label: '# of Votes',
      //data: [12, 19, 3, 5, 2, 3],

      data: [
        [12, 19],
        [19, 3],
        [3, 5],
        [5, 2],
        [2, 3],
        [3, 9],
        [9, 15],
        [15, 10]
      ],
      backgroundColor: this.barBackgroundColorCode(),
      borderColor: this.barColorCode(),
      borderWidth: 1,
      borderSkipped: false
    }]
  };

  // waterfallLines plugin
  waterfallLines = {
    id: 'waterfall',
    beforeDraw(chart:any, args:any, options:any) {
      const { ctx, config, scales: { x, y } } = chart;

      ctx.save();
      ctx.strokeStyle = options.lineColor;
      ctx.setLineDash([options.linestyle1, options.linestyle2]);
      for (let i = 0; i < config._config.data.datasets[0].data.length - 1; i++) {
        ctx.strokeRect(x.getPixelForValue(i), y.getPixelForValue(config._config.data.datasets[0].data[i][1]), x.getPixelForValue(0.5), 0);
      };

    }
  }
  ngOnInit(): void {
    Chart.register(ChartDataLabels);
    this.myChart = new Chart('myChart', <any>{
      type: 'bar',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            formatter: (value) => {
              const votes = value[1] - value[0];
              const netVotes = Math.abs(votes)
              return `Votes: ${netVotes}`;
            }
          },
          waterfall: {
            lineColor: 'black',
            linestyle1: 5,
            linestyle2: 5
          },
          tooltip: {
            enabled: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [this.waterfallLines]
    })
  }

}
@NgModule({
  declarations: [WaterfallChartComponent],
  imports: [CommonModule],
  exports: []
})

export class WaterfallChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<WaterfallChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(WaterfallChartComponent);
  }
}
