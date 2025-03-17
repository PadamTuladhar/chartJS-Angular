import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-clickable-pie-chart',
  templateUrl: './clickable-pie-chart.component.html',
  styleUrls: ['./clickable-pie-chart.component.css']
})
export class ClickablePieChartComponent implements OnInit {
  myChart: any;
  data = {
    labels: ['Google', 'Chartjs', 'Amazon', 'Flipkart'],
    datasets: [{
      label: '# of Votes',
      data: [
        { financials: 'Google', url: 'https://www.google.com', amount: { usd: 900, eur: 600 } },
        { financials: 'Chartjs', url: 'https://www.chartjs.org', amount: { usd: 600, eur: 450 } },
        { financials: 'Amazon', url: 'https://www.amazon.com', amount: { usd: 450, eur: 300 } },
        { financials: 'Flipkart', url: 'https://www.flipkart.com', amount: { usd: 450, eur: 300 } },
      ],
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
      borderWidth: 1
    }]
  };
  pieChartCanvas(click: any) {
    const clickedSlice = this.myChart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
    if (clickedSlice.length) {
      const pieSlice = clickedSlice[0];
      const link = this.myChart.data.datasets[clickedSlice[0].datasetIndex].data[clickedSlice[0].index].url;
      window.open(link);
    }

  }
  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'pie',
      data: this.data,
      options: {
        onHover:(event, chartElement,chart)=>{
          const{ctx} = chart;
          ctx.canvas.style.cursor = chart['_active'].length > 0 ? 'pointer' : 'default';
        },
        plugins: {
          datalabels: {
            display: false
          }
        },
        parsing: {
          key: 'amount.usd'
        }
      }
    });
  }

}

@NgModule({
  declarations: [ClickablePieChartComponent],
  imports: [CommonModule],
  exports: []
})

export class ClickablePieChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<ClickablePieChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(ClickablePieChartComponent);
  }
}
