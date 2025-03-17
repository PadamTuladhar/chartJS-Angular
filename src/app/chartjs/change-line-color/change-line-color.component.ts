import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-change-line-color',
  templateUrl: './change-line-color.component.html',
  styleUrls: ['./change-line-color.component.css']
})
export class ChangeLineColorComponent implements OnInit{

  myChart: any;
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      tension: 0.4
    }]
  };

  changeColor(color: string){
    this.myChart.config.data.datasets[0].backgroundColor = color;
    this.myChart.config.data.datasets[0].borderColor = color;
    this.myChart.update();
  }
  
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
  }

}
@NgModule({
  declarations: [ChangeLineColorComponent],
  imports: [CommonModule],
  exports: []
})

export class ChangeLineColorModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<ChangeLineColorComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(ChangeLineColorComponent);
  }
}
