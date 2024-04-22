import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [],
  providers: [
    provideClientHydration()
  ],
  bootstrap: []
})
export class ChartModule { }
