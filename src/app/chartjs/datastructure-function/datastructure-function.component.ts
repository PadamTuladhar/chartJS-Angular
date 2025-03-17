import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-datastructure-function',
  templateUrl: './datastructure-function.component.html',
  styleUrls: ['./datastructure-function.component.css']
})
export class DatastructureFunctionComponent implements OnInit {
  myChart: any;
  departmentInfo: Array<{}> = [];
  departmentDatasets = ['Sales Department', 'Marketing Department', 'HR Department', 'IT Department'];
  cost = [999, 666, 333, 999];
  budget = [3000, 4000, 5000, 10000];
  tax = [1000, 1000, 1000, 1000];

  data = {
    datasets: [{
      label: 'Tax',
      data: this.departmentInfo,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };
  
  changeFinancials(financials) {
    let convertedFinancials = financials.toLowerCase();
    this.myChart.options.parsing.xAxisKey = `financials.${convertedFinancials}`;
    this.myChart.data.datasets[0].label = financials;
    this.myChart.update();
  }

  ngOnInit(): void {

    this.departmentDatasets.forEach((dep, i) => {
      this.departmentInfo.push({
        "department": dep,
        "financials": {
          "cost": this.cost[i],
          "budget": this.budget[i],
          "tax": this.tax[i]
        }
      })
    })

    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.data,
      options: {
        parsing: {
          yAxisKey: 'department',
          xAxisKey: 'financials.tax'
        },
        indexAxis: 'y',
      }
    })
  }

}
@NgModule({
  declarations: [DatastructureFunctionComponent],
  imports: [CommonModule],
  exports: []
})

export class DatastructureFunctionModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<DatastructureFunctionComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(DatastructureFunctionComponent);
  }
}