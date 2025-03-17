import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';

@Component({
  selector: 'app-live-streaming-chart',
  templateUrl: './live-streaming-chart.component.html',
  styleUrls: ['./live-streaming-chart.component.css']
})
export class LiveStreamingChartComponent implements OnInit {
  myChart: any;

  data = {
    //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      //label: '# of Votes',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    }]
  };

  ngOnInit(): void {
    Chart.register(ChartStreaming);
    this.myChart = new Chart('myChart', {
      type: 'line',
      data: this.data,
      options: {
        plugins: {
          // Change options for ALL axes of THIS CHART
          streaming: {
            duration: 20000
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              onRefresh: chart => {
                chart.data.datasets.forEach(dataset => {
                  dataset.data.push({
                    x: Date.now(),
                    y: Math.random()
                  });
                });
              }
            }
          }
        }
      }
    })
  }
}

@NgModule({
  declarations: [LiveStreamingChartComponent],
  imports: [CommonModule],
  exports: []
})

export class LiveStreamingChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<LiveStreamingChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LiveStreamingChartComponent);
  }
}
