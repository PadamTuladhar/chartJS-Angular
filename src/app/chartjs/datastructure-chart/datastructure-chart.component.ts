import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-datastructure-chart',
  templateUrl: './datastructure-chart.component.html',
  styleUrls: ['./datastructure-chart.component.css']
})
export class DatastructureChartComponent implements OnInit {
  myChart1: any;
  myChart2: any;

  departmentDataSets = ['Sales Department', 'Marketing Department', 'HR Department', 'IT Department',];
  cost = [1000, 2000, 3000, 4000];
  budget = [3000, 6000, 9000, 12000];

  departmentInfo = this.departmentDataSets.map((department, index) => {
    let departmentDataSet = {
      'department': department,
      'financials': {
        'cost': this.cost[index],
        'budget': this.budget[index]
      }
    }
    return departmentDataSet;
  })

  xData = {
    datasets: [{
      label: 'Cost',
      data: this.departmentInfo,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      parsing: {
        xAxisKey: 'department',
        yAxisKey: 'financials.cost'
      },
    },
    {
      label: 'Budget',
      data: this.departmentInfo,
      backgroundColor: 'rgba(0, 99, 132, 0.2)',
      borderColor: 'rgba(0, 99, 132, 1)',
      parsing: {
        xAxisKey: 'department',
        yAxisKey: 'financials.budget'
      },
    }]
  };

  yData = {
    datasets: [{
      label: 'Cost',
      data: this.departmentInfo,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      parsing: {
        yAxisKey: 'department',
        xAxisKey: 'financials.cost'
      },
    },
    {
      label: 'Budget',
      data: this.departmentInfo,
      backgroundColor: 'rgba(0, 99, 132, 0.2)',
      borderColor: 'rgba(0, 99, 132, 1)',
      parsing: {
        yAxisKey: 'department',
        xAxisKey: 'financials.budget'
      },
    }]
  };

  ngOnInit(): void {
    this.myChart1 = new Chart('myChart1', {
      type: 'bar',
      data: this.xData,
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
      type: 'bar',
      data: this.yData,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        indexAxis: 'y'
      }
    });
  }

}

@NgModule({
  declarations: [DatastructureChartComponent],
  imports: [CommonModule],
  exports: []
})

export class DataStructureChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<DatastructureChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(DatastructureChartComponent);
  }
}
