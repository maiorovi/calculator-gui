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
    this.expression += event.key;
  }

  submitExpressionAndProcessResult() {
    this.calculationService.evaluateExpression(this.expression)
      .subscribe(response => {
        let json = response.json();
        this.expression = json.initialExpression + "=" + json.evaluationResult;
      });
  }

}
