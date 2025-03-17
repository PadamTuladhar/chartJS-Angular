import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-drill-down-chart',
  templateUrl: './drill-down-chart.component.html',
  styleUrls: ['./drill-down-chart.component.css']
})
export class DrillDownChartComponent implements OnInit {
  myChart: any;
  showBackButton: boolean = false;
  browserData = [
    {
      browser: 'Chrome',
      color: 'rgba(75, 192, 192, 1)',
      users: 150,
      marketshare: 70,
      versionData: [
        { version: 'v5', users: 10 },
        { version: 'v6', users: 20 },
        { version: 'v7', users: 30 },
        { version: 'v8', users: 60 },
        { version: 'v9', users: 20 },
      ],
    },
    {
      browser: 'FireFox',
      color: 'rgba(255, 26, 104, 1)',
      users: 25,
      marketshare: 24,
      versionData: [
        { version: 'V3.1', users: 10 },
        { version: 'v3.2', users: 10 },
        { version: 'v3.3', users: 5 },
      ],
    },
    {
      browser: 'Safari',
      color: 'rgba(54, 162, 235, 1)',
      users: 30,
      marketshare: 26,
      versionData: [
        { version: 'Web 9', users: 10 },
        { version: 'Web 10', users: 10 },
        { version: 'Web 11', users: 10 },
      ],
    }
  ];
  data = {
    //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Browser Data Market Share',
      data: this.browserData,
      backgroundColor: [
        this.browserData[0].color,
        this.browserData[1].color,
        this.browserData[2].color
      ],
      borderColor: [
        this.browserData[0].color,
        this.browserData[1].color,
        this.browserData[2].color
      ],
      borderWidth: 1,
    }]
  };
  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.data,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        onHover: (event: any, chartElement, chart) => {
          //console.log(chartElement[0])
          if (chart.data.datasets[0].label === 'Browser Data Market Share') {
            event.native.target['style']['cursor'] = chartElement[0] ? 'pointer' : 'default';
          } else {
            event.native.target['style']['cursor'] = 'default';
          }
        },
        parsing: {
          xAxisKey: 'browser',
          yAxisKey: 'marketshare',
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  changeChart(browser: any) {
    this.showBackButton = true;
    this.myChart.options.parsing.xAxisKey = 'versionData.version';
    this.myChart.options.parsing.yAxisKey = 'versionData.users';

    const vColor: any = [];
    const vUsers: any = [];
    const vLabel = this.browserData[browser].versionData.map(labels => {
      vUsers.push(labels.users);
      vColor.push(this.browserData[browser].color);
      return labels.version;
    });

    this.myChart.data.labels = vLabel;
    this.myChart.data.datasets[0].label = this.browserData[browser].browser;
    this.myChart.data.datasets[0].data = vUsers;
    this.myChart.data.datasets[0].backgroundColor = vColor;
    this.myChart.data.datasets[0].borderColor = vColor;
    this.myChart.update();
  }

  clickHandler(click: any) {
    if (this.myChart.data.datasets[0].label === 'Browser Data Market Share') {

      const bar = this.myChart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
      if (bar[0]) {
        this.changeChart(bar[0].index);
      }

    }
  }

  resetChart() {
    this.showBackButton = false;
    this.myChart.options.parsing.xAxisKey = 'browser';
    this.myChart.options.parsing.yAxisKey = 'marketshare';

    const bColor: any = [];
    const bMarketshare: any = [];
    const bLabel = this.browserData.map(browser => {
      bMarketshare.push(browser.marketshare);
      bColor.push(browser.color);
      return browser.browser;
    });

    this.myChart.data.labels = bLabel;
    this.myChart.data.datasets[0].label = "Browser Data Market Share";
    this.myChart.data.datasets[0].data = bMarketshare;
    this.myChart.data.datasets[0].backgroundColor = bColor;
    this.myChart.data.datasets[0].borderColor = bColor;
    this.myChart.update();
  }

}

@NgModule({
  declarations: [DrillDownChartComponent],
  imports: [CommonModule],
  exports: []
})

export class DrillDownChartModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<DrillDownChartComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(DrillDownChartComponent);
  }
}
