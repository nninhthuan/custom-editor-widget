import { Component, Input } from '@angular/core';

@Component({
  selector: 'chart-plotly-js',
  templateUrl: './chart-plotly-js.component.html',
  styleUrl: './chart-plotly-js.component.scss'
})
export class ChartPlotlyJSComponent {
  @Input() data: any;
  @Input() layout: any;
  @Input() config : any;
}
