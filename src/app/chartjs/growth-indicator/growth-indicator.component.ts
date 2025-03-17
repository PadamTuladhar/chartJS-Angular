import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-growth-indicator',
  templateUrl: './growth-indicator.component.html',
  styleUrls: ['./growth-indicator.component.css']
})
export class GrowthIndicatorComponent implements OnInit {
  myChart: any;
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Red bar',
      data: [
        [0, 12],
        [0, 19],
        [0, 3],
        [0, 5],
        [0, 2],
        [0, 3],
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      label: 'Arrow bar',
      data: [
        [12, 19],
        [19, 3],
        [3, 5],
        [5, 2],
        [2, 3]
      ],
      backgroundColor: 'rgba(0, 0, 0, 1)',
      borderColor: 'rgba(0, 0, 0, 1)',
      barPercentage: 0.05,
    }]
  };

  barGrowthIndicator = {
    id: "barGrowthIndicator",
    afterDatasetDraw(chart: any, scales: any, options: any) {
      const { ctx, scales: { x, y } } = chart;
      const deltaPercentage = [];
      for (let i = 0; i < chart._metasets[0]._parsed.length - 1; i++) {
        const basis = chart._metasets[0]._parsed[i].y;
        const delta = chart._metasets[0]._parsed[i + 1].y;
        let percentage = delta / basis * 100;
        percentage = percentage - 100;
        deltaPercentage.push(percentage.toFixed(1));
      }

      if (!chart._metasets[1].hidden) {
        for (let i = 0; i < deltaPercentage.length; i++) {
          const start = chart._metasets[1]._parsed[i]._custom.start;
          const end = chart._metasets[1]._parsed[i]._custom.end;

          if (end >= start) {
            ctx.beginPath();
            ctx.moveTo(chart.getDatasetMeta(1).data[i].x, chart.getDatasetMeta(1).data[i].y - 2);
            ctx.lineTo(chart.getDatasetMeta(1).data[i].x - 5, chart.getDatasetMeta(1).data[i].y + 5);
            ctx.lineTo(chart.getDatasetMeta(1).data[i].x + 5, chart.getDatasetMeta(1).data[i].y + 5);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.restore();

            ctx.font = "10 px Arial";
            ctx.fillStyle = "green";
            ctx.textAlign = "center";
            ctx.fillText(deltaPercentage[i] + '%', chart.getDatasetMeta(1).data[i].x + 5, chart.getDatasetMeta(1).data[i].y - 10);
          } else {
            ctx.beginPath();
            ctx.moveTo(chart.getDatasetMeta(1).data[i].x, chart.getDatasetMeta(0).data[i + 1].y + 3);
            ctx.lineTo(chart.getDatasetMeta(1).data[i].x + 5, chart.getDatasetMeta(0).data[i + 1].y - 5);
            ctx.lineTo(chart.getDatasetMeta(1).data[i].x - 5, chart.getDatasetMeta(0).data[i + 1].y - 5);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.restore();

            ctx.font = "10 px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText(deltaPercentage[i] + '%', chart.getDatasetMeta(1).data[i].x + 5, chart.getDatasetMeta(0).data[i + 1].y + 13);
          }
        }
      }
    }
  }
  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          },
          tooltip: {
            filter: (tooltipItem) => {
              return tooltipItem.datasetIndex === 0;
            }
          }
        },
        scales: {
          y: {
            grace: '5%',
            beginAtZero: true
          }
        }
      },
      plugins: [this.barGrowthIndicator]
    })
  }

}

@NgModule({
  declarations: [GrowthIndicatorComponent],
  imports: [CommonModule],
  exports: []
})

export class GrowthIndicatorModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<GrowthIndicatorComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(GrowthIndicatorComponent);
  }
}
