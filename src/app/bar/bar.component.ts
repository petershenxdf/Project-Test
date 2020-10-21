
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  private chart: am4charts.XYChart3D;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("bardiv", am4charts.XYChart3D);

// Add data
chart.data = [{
  "state": "New York",
  "income": 235,
  "color": chart.colors.next()
}, {
  "state": "Illinois",
  "income": 262,
  "color": chart.colors.next()
}, {
  "state": "Ohio",
  "income": 301,
  "color": chart.colors.next()
}, {
  "state": "Iowa",
  "income": 295,
  "color": chart.colors.next()
}, {
  "state": "California",
  "income": 246,
  "color": chart.colors.next()
}];

// Create axes
let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "state";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;

let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 

// Create series
let series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueX = "income";
series.dataFields.categoryY = "state";
series.name = "Income";
series.columns.template.propertyFields.fill = "color";
series.columns.template.tooltipText = "{valueX}";
series.columns.template.column3D.stroke = am4core.color("#fff");
series.columns.template.column3D.strokeOpacity = 0.2;

    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}

