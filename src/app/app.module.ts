import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorCoreComponent } from './calculator-core/calculator-core.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorCoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
