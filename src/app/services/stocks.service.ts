import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com'; // API endpoint URL

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) {}

  get(): Array<string> {
    return stocks.slice(); // return copy instead of direct value
  }

  add(stock:string): Array<string> {
    stocks.push(stock);
    return this.get();
  }

  remove(stock:string): Array<string> {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols:Array<string>): Observable<Array<StockInterface>> {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}