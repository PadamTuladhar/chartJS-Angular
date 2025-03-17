import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';

@Component({
  selector: 'app-multiple-dataset',
  templateUrl: './multiple-dataset.component.html',
  styleUrls: ['./multiple-dataset.component.css']
})
export class MultipleDatasetComponent implements OnInit {

  myChart: any;
  public lineChartType: ChartType = "line";
  public barChartType: ChartType = "bar";
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Bar chart',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      type: this.barChartType,
      order: 2
    },
    {
      label: 'Line chart',
      data: [6, 7, 3, 2.5, 2, 3],
      backgroundColor: 'rgba(0, 159, 64, 0.2)',
      borderColor: 'rgba(0, 159, 64, 1)',
      tension: 0.4,
      type: this.lineChartType,
      order: 1
    }]
  };

  ngOnInit(): void {
    Chart.register(...registerables);
    this.myChart = new Chart('myChart', {
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          },
          tooltip: {
            yAlign: "bottom"
          }
        },
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
  declarations: [MultipleDatasetComponent],
  imports: [CommonModule],
  exports: []
})

export class MultipleDatasetModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<MultipleDatasetComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(MultipleDatasetComponent);
  }
}