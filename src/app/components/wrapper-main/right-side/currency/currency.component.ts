import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../../Injectable/Globals';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  date:any;
  constructor(private globals: Globals) {
    this.date = globals.getDateNow();

    this
      .globals
      .getUSDAZN()
      .subscribe((data:any)=>{
        this.usd = Number(data[0].result).toFixed(4);
        this.usdBuy = (Number(data[0].result) - 0.0030).toFixed(4);
        this.usdSell = (Number(data[0].result) + 0.0020).toFixed(4);
      });

      this
      .globals
      .getEURAZN()
      .subscribe((data:any)=>{
        this.eur = data[0].result;
        this.eurBuy = (Number(data[0].result) - 0.0030).toFixed(4);
        this.eurSell = (Number(data[0].result) + 0.0020).toFixed(4);
      });

      this
      .globals
      .getRUBAZN()
      .subscribe((data:any)=>{
        this.rub = data[0].result;
        this.rubBuy = (Number(data[0].result) - 0.0031).toFixed(4);
        this.rubSell = (Number(data[0].result) + 0.0001).toFixed(4);
      });
   };

   usd:string;
   usdBuy:string;
   usdSell:string;
   
   eur:string;
   eurBuy:string;
   eurSell:string;

   rub:string;
   rubBuy:string;
   rubSell:string;

   result:any = 100;
   defaultCurr:number = 170;

   selectCurrencyBuy:any = "AZN";
   selectCurrencySell:any = "USD";

   currenyType:string = "USD";

  ngOnInit() {
    
  }

  getCbarCurrency()
  {
    this
      .globals
      .getFullCurrency({
        currencyBuy:this.selectCurrencyBuy,
        currencySell:this.selectCurrencySell
      })
      .subscribe((data:any)=>{
            let fixedNumber = (this.defaultCurr * data[0].result).toFixed(3);
            let fixedNumberArr = fixedNumber.split('.');
            this.currenyType = this.selectCurrencySell;
            if(Number(fixedNumberArr[1]) > 0)
            {
              this.result = fixedNumber;
            }else{
              this.result = (this.defaultCurr * data[0].result).toFixed();
            }
      });
          
  }

}
