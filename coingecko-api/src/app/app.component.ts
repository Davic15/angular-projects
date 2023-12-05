import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "./models/coin.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  titles: string [] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume'
  ];

  searchText = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').subscribe(res => {
        console.log(res);
        this.coins = res;
        this.filteredCoins = res;
      },
      (err) => {
        console.log(err)
      })
  }

  searchCoin() {
    this.filteredCoins = this.coins.filter((coin) =>
      coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


}
