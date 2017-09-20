import { Component, OnInit } from '@angular/core';
import {CalculationService} from "../calculation.service";

@Component({
  selector: 'calculator-core',
  templateUrl: './calculator-core.component.html',
  styleUrls: ['./calculator-core.component.css']
})
export class CalculatorCoreComponent implements OnInit {
  private static URL = "http://localhost:8080/expression/";
  expression:string = '';
  private isInputActive:boolean = false;
  private allowedSymbols = ['1','2','3','4','5','6','7','8','9','0', '*', '/', '+', '-']

  constructor(private calculationService:CalculationService) { }

  ngOnInit() {
  }

  extendExpressionWith(digit) {
    this.expression += digit;
  }

  clearExpression() {
    this.expression = '';
  }

  clearLast() {
    this.expression = this.expression.substring(0, this.expression.length - 1);
  }

  handleKeyPressed(event) {
    console.log(event);
    if (event.key == "Enter") {
      this.submitExpressionAndProcessResult();
      return;
    }

    if (event.key == "Delete") {
      this.expression = '';
      return;
    }

    if (event.key == "Backspace") {
      this.expression = this.expression.substring(0, this.expression.length - 1)
    }

    if (!this.isInputActive && this.allowedSymbols.some(x => x == event.key)) {
      this.expression += event.key;
    }
  }

  submitExpressionAndProcessResult() {
    this.calculationService.evaluateExpression(this.expression)
      .subscribe(response => {
        let json = response.json();
        this.expression = json.initialExpression + "=" + json.evaluationResult;
      });
  }

  handleFocus() {
    this.isInputActive = true;
  }

  handleBlur() {
    this.isInputActive = false;
  }

}
