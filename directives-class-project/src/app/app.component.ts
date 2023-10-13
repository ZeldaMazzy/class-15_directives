import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIncome: boolean = true;

  incomeList: number[] 
    = [100, 50, 400];

  expenseList: number[]
    = [100, 75];

  get displayIncomeToggleMessage() {
    if(this.showIncome) return "Show Expenses";
    else return "Show Income"
  }
}