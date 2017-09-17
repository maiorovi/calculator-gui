import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-core',
  templateUrl: './calculator-core.component.html',
  styleUrls: ['./calculator-core.component.css']
})
export class CalculatorCoreComponent implements OnInit {
  expression:String = '';
  constructor() { }

  ngOnInit() {
  }

  extendExpressionWith(digit) {
    this.expression += digit;
  }

  clearExpression() {
    this.expression = '';
  }

  clearLast() {
    this.expression = this.expression.substring(0, this.expression.length - 1)
  }

}
