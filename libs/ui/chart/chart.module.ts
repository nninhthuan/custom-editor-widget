import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { ChartPlotlyJSComponent } from './chart-plotly-js/chart-plotly-js.component';


@NgModule({
  declarations: [
    ChartComponent,
    ChartPlotlyJSComponent,
  ],
  imports: [],
  exports: [ChartComponent]
})
export class ChartModule { }
