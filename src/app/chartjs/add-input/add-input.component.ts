import { CommonModule } from '@angular/common';
import { Component, ComponentFactory, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
})
export class AddInputComponent implements OnInit {
  myChart: any;
  addInputForm!: FormGroup;
  labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  dataPoints = [12, 19, 3, 5, 2, 3];
  data = {
    labels: this.labels,
    datasets: [{
      label: '# of Votes',
      data: this.dataPoints,
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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.addInputForm = this.fb.group({
      inputValue: new FormControl("", {}),
      inputLabel: new FormControl("", {}),
    });

    this.myChart = new Chart('myChart', {
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
    })
  }

  addValue() {
    const valueId = this.addInputForm?.controls['inputValue'].value;
    const labelText = this.addInputForm?.controls["inputLabel"].value;
    this.dataPoints.push(parseInt(valueId));
    this.labels.push(labelText);
    this.myChart.data.datasets[0].data = this.dataPoints;
    this.myChart.data.labels = this.labels;
    this.myChart.update();
  }

}

@NgModule({
  declarations: [AddInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: []
})

export class AddInputModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<AddInputComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AddInputComponent);
  }
}
