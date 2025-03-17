import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-default-example',
  templateUrl: './default-example.component.html',
  styleUrls: ['./default-example.component.css']
})
export class DefaultExampleComponent implements OnInit {

  myChart1: any;
  myChart2: any;
  myChart3: any;
  myChart4: any;
  myChart5: any;
  myChart6: any;
  myChart7: any;
  myChart8: any;

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
    }]
  };

  dataStacked = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Stacked datasets1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'Stacked datasets1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Stacked datasets1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  polarData = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132, 0.2)',
        'rgb(75, 192, 192, 0.2)',
        'rgb(255, 205, 86, 0.2)',
        'rgb(201, 203, 207, 0.2)',
        'rgb(54, 162, 235, 0.2)'
      ]
    }]
  };

  radarData = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132, 0.2)',
      pointBackgroundColor: 'rgb(255, 99, 132, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132, 0.2)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  bubbleData = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  };

  scatterData = {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  };

  ngOnInit(): void {
    Chart.register(...registerables);
    this.myChart1 = new Chart('barChart', {
      type: 'bar',
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

    this.myChart2 = new Chart('yaxisbarChart', {
      type: 'bar',
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
        },
        indexAxis: 'y'
      }
    });

    this.myChart3 = new Chart('stackedBarChart', {
      type: 'bar',
      data: this.dataStacked,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true
          }
        }
      }
    });

    this.myChart4 = new Chart('polarChart', {
      type: 'polarArea',
      data: this.polarData,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          r: {
            beginAtZero: true
          }
        }
      }
    });

    this.myChart5 = new Chart('radarChart', {
      type: 'radar',
      data: this.radarData,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });

    this.myChart6 = new Chart('scatterChart', {
      type: 'scatter',
      data: this.scatterData,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });

    this.myChart7 = new Chart('lineChart', {
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

    this.myChart8 = new Chart('bubbleChart', {
      type: 'bubble',
      data: this.bubbleData,
      options: {
        plugins: {
          datalabels: {
            display: false
          }
        }
      }
    });


  }

}

@NgModule({
  declarations: [DefaultExampleComponent],
  imports: [CommonModule],
  exports: []
})

export class DefaultExampleModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<DefaultExampleComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(DefaultExampleComponent);
  }
}
