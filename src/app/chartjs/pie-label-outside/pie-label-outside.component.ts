import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { getChartLabelPlugin, PLUGIN_ID } from 'chart.js-plugin-labels-dv';


@Component({
  selector: 'app-pie-label-outside',
  templateUrl: './pie-label-outside.component.html',
  styleUrls: ['./pie-label-outside.component.css']
})
export class PieLabelOutsideComponent implements AfterViewInit {
  myChart: any;
  data = {
    labels: ['Red 1', 'Red 2', 'Red 3', 'Green'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 15, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
      offset: [20, 20, 20, 0]
    }]
  };

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    if (!this.hasRegisteredPlugin()) {
      Chart.register(getChartLabelPlugin());
    }

    this.myChart = new Chart('myChart', <any>{
      type: 'pie',
      data: this.data,
      options: {
        layout: {
          padding: {
            left: 80,
            right: 20,
            top: 30,
            bottom: 30
          }
        },
        plugins: {
          labels: {
            render: (args: any): string => {
              return `${args.label}: ${args.percentage}%`
            },
            position: 'outside',
            textMargin: 10,
          }
        }
      }
    });
  }

  private hasRegisteredPlugin(): boolean {
    return !!Chart.registry?.plugins.get(PLUGIN_ID);
  }

}

@NgModule({
  declarations: [PieLabelOutsideComponent],
  imports: [CommonModule],
  exports: []
})

export class PieLableOutsideModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<PieLabelOutsideComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(PieLabelOutsideComponent);
  }
}
