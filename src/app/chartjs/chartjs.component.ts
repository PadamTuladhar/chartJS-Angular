import { Compiler, Component, Injector, NgModuleRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {
  title = 'Default example';
  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef | undefined;

  default: string = "default";
  exampleList = [
    { value: "default", viewValue: "Default example" },
    { value: "multipleDataset", viewValue: "Multiple datasets" },
    { value: "customTick", viewValue: "Custom tick" },
    { value: "customGap", viewValue: "Custom gap" },
    { value: "customGridline", viewValue: "Custom grid line" },
    { value: "customizeTooltip", viewValue: "Customize tooltip" },
    { value: "scaleTitle", viewValue: "Custom scale title" },
    { value: "horizontalRange", viewValue: "Horizontal range bar chart" },
    { value: "pieLabelsOutside", viewValue: "Labels outside pie chart" },
    { value: "clickablePie", viewValue: "Clickable pie chart" },
    { value: "datastructureChart", viewValue: "Data structure chart" },
    { value: "changeLineColor", viewValue: "Change line color" },
    { value: "overlappingBar", viewValue: "Overlapping bar chart" },
    { value: "linesegmentStyling", viewValue: "Line segment styling chart" },
    { value: "addInput", viewValue: "Add input field" },
    { value: "dyanamicChart", viewValue: "Dynamic chart with 'Next' and 'Previous'" },
    { value: "waterFall", viewValue: "Waterfall bar chart" },
    { value: "growthIndicator", viewValue: "Growth indicator chart" },
    { value: "doughnutCenterText", viewValue: "Display text in center of doughnut on hover" },
    { value: "drillDown", viewValue: "Drill down bar chart" },
    { value: "indicatorTracker", viewValue: "Indicator tracker" },
    { value: "datastructureFunction", viewValue: "Datastructure function" },
    { value: "gradientBackground", viewValue: "Gradient background" },
    { value: "liveStreaming", viewValue: "Live streaming chart" }
  ]

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    this.loadStepDynamically("default");
  }

  getExample(exampleValue: any, exampleViewValue: any) {
    this.title = exampleViewValue;
    this.loadStepDynamically(exampleValue);
  }

  loadStepDynamically(step: string) {
    console.log(step);
    switch (step) {
      case "default":
        import("./default-example/default-example.component").then(
          ({ DefaultExampleModule }) => {
            this.dynamicImportComponent(DefaultExampleModule);
          }
        );
        break;

      case "multipleDataset":
        import("./multiple-dataset/multiple-dataset.component").then(
          ({ MultipleDatasetModule }) => {
            this.dynamicImportComponent(MultipleDatasetModule);
          }
        );
        break;

      case "customTick":
        import("./custom-tick/custom-tick.component").then(
          ({ CustomTickModule }) => {
            this.dynamicImportComponent(CustomTickModule);
          }
        );
        break;

      case "customGap":
        import("./custom-gap/custom-gap.component").then(
          ({ CustomGapModule }) => {
            this.dynamicImportComponent(CustomGapModule);
          }
        );
        break;

      case "customGridline":
        import("./custom-grid/custom-grid.component").then(
          ({ CustomGridModule }) => {
            this.dynamicImportComponent(CustomGridModule);
          }
        );
        break;

      case "customizeTooltip":
        import("./custom-tooltip/custom-tooltip.component").then(
          ({ CustomTooltipModule }) => {
            this.dynamicImportComponent(CustomTooltipModule);
          }
        );
        break;

      case "scaleTitle":
        import("./custom-scale-title/custom-scale-title.component").then(
          ({ CustomScaleTitleModule }) => {
            this.dynamicImportComponent(CustomScaleTitleModule);
          }
        );
        break;

      case "horizontalRange":
        import("./horizontal-bar-chart/horizontal-bar-chart.component").then(
          ({ HorizontalBarChartModule }) => {
            this.dynamicImportComponent(HorizontalBarChartModule);
          }
        );
        break;

      case "pieLabelsOutside":
        import("./pie-label-outside/pie-label-outside.component").then(
          ({ PieLableOutsideModule }) => {
            this.dynamicImportComponent(PieLableOutsideModule);
          }
        );
        break;

      case "clickablePie":
        import("./clickable-pie-chart/clickable-pie-chart.component").then(
          ({ ClickablePieChartModule }) => {
            this.dynamicImportComponent(ClickablePieChartModule);
          }
        );
        break;

      case "datastructureChart":
        import("./datastructure-chart/datastructure-chart.component").then(
          ({ DataStructureChartModule }) => {
            this.dynamicImportComponent(DataStructureChartModule);
          }
        );
        break;

      case "changeLineColor":
        import("./change-line-color/change-line-color.component").then(
          ({ ChangeLineColorModule }) => {
            this.dynamicImportComponent(ChangeLineColorModule);
          }
        );
        break;

      case "overlappingBar":
        import("./overlapping-bar-chart/overlapping-bar-chart.component").then(
          ({ OverlappingBarChartModule }) => {
            this.dynamicImportComponent(OverlappingBarChartModule);
          }
        );
        break;

      case "linesegmentStyling":
        import("./linesegment-styling/linesegment-styling.component").then(
          ({ LineSegmentStylingModule }) => {
            this.dynamicImportComponent(LineSegmentStylingModule);
          }
        );
        break;

      case "addInput":
        import("./add-input/add-input.component").then(
          ({ AddInputModule }) => {
            this.dynamicImportComponent(AddInputModule);
          }
        );
        break;

      case "dyanamicChart":
        import("./dynamic-chart/dynamic-chart.component").then(
          ({ DynamicChartModule }) => {
            this.dynamicImportComponent(DynamicChartModule);
          }
        );
        break;

      case "waterFall":
        import("./waterfall-chart/waterfall-chart.component").then(
          ({ WaterfallChartModule }) => {
            this.dynamicImportComponent(WaterfallChartModule);
          }
        );
        break;

      case "growthIndicator":
        import("./growth-indicator/growth-indicator.component").then(
          ({ GrowthIndicatorModule }) => {
            this.dynamicImportComponent(GrowthIndicatorModule);
          }
        );
        break;

      case "doughnutCenterText":
        import("./doughnut-center-text-chart/doughnut-center-text-chart.component").then(
          ({ DoughnutCenterTextChartModule }) => {
            this.dynamicImportComponent(DoughnutCenterTextChartModule);
          }
        );
        break;

      case "drillDown":
        import("./drill-down-chart/drill-down-chart.component").then(
          ({ DrillDownChartModule }) => {
            this.dynamicImportComponent(DrillDownChartModule);
          }
        );
        break;

      case "indicatorTracker":
        import("./indicator-tracker/indicator-tracker.component").then(
          ({ IndicatorTrackerModule }) => {
            this.dynamicImportComponent(IndicatorTrackerModule);
          }
        );
        break;


      case "datastructureFunction":
        import("./datastructure-function/datastructure-function.component").then(
          ({ DatastructureFunctionModule }) => {
            this.dynamicImportComponent(DatastructureFunctionModule);
          }
        );
        break;

      case "gradientBackground":
        import("./gradient-background/gradient-background.component").then(
          ({ GradientBackgroundModule }) => {
            this.dynamicImportComponent(GradientBackgroundModule);
          }
        );
        break;

      case "liveStreaming":
        import("./live-streaming-chart/live-streaming-chart.component").then(
          ({ LiveStreamingChartModule }) => {
            this.dynamicImportComponent(LiveStreamingChartModule);
          }
        );
        break;

      default:
        break;
    }
  }

  private dynamicImportComponent(module: any) {
    this.container?.clear();
    this.compiler.compileModuleAsync(module).then((moduleFactory) => {
      const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
      const componentFactory = moduleRef.instance.resolveComponent();
      this.container?.createComponent(
        componentFactory
      )
    })
  }
}
