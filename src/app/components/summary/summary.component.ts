import { Component, Input } from '@angular/core';
import { StockInterface } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() stock: StockInterface;

  isNegative(): boolean {
    return this.stock && this.stock.change < 0;
  }

  isPositive(): boolean {
    return this.stock && this.stock.change > 0;
  }
}
