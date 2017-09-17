import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorCoreComponent } from './calculator-core/calculator-core.component';
import {FormsModule} from "@angular/forms";
import { KeyPressDirective } from './key-press.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorCoreComponent,
    KeyPressDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
