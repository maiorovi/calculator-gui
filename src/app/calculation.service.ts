import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class CalculationService {
  private static URL:string = "http://localhost:8080/expression/";

  constructor(private http: Http) { }

  public evaluateExpression(expression: string) {
    return this.http.get(CalculationService.URL + expression);
  }

}
