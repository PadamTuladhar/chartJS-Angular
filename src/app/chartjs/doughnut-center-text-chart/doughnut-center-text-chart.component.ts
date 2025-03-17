import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-center-text-chart',
  templateUrl: './doughnut-center-text-chart.component.html',
  styleUrls: ['./doughnut-center-text-chart.component.css']
})
export class DoughnutCenterTextChartComponent implements OnInit {
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
      borderWidth: 1,
      cutout: "90%"
    }]
  };

  hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart: any, args: any, options: any) {
      const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
      ctx.save();

      if (chart._active.length != 0) {
        const color = chart._active[0].element.options.borderColor;
        const index = chart._active[0].index;
        const datasetIndex = chart._active[0].datasetIndex;

        const displayName = chart.data.labels[index] + ": $" + chart.data.datasets[datasetIndex].data[index];

        ctx.font = "bolder 60px Arial";
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.fillText(displayName, (width / 2), (height / 2 + top));
      }
      ctx.restore();
    }
  }

  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'doughnut',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        }
      },
      plugins: [this.hoverLabel]
    })
  }

}
@NgModule({
  declarations: [DoughnutCenterTextChartComponent],
  imports: [CommonModule],
  exports: []
})

export class DoughnutCenterTextChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<DoughnutCenterTextChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(DoughnutCenterTextChartComponent);
  }
}
