import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Globals {
    constructor(private  httpClient: HttpClient) {}

    getDateNow(): any {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const dateNow = dd + '.' + mm + '.' + yyyy;

        return dateNow;
    }

    getUSDAZN(): Observable<any> {
        return this
            .httpClient
            .get('http://localhost:4000/index.php?url=https://valyuta.com/api/get_rate_current_all/USD/AZN');
    }

    getEURAZN(): Observable<any> {
        return this
            .httpClient
            .get('http://localhost:4000/index.php?url=https://valyuta.com/api/get_rate_current_all/EUR/AZN');
    }

    getRUBAZN(): Observable<any> {
        return this
            .httpClient
            .get('http://localhost:4000/index.php?url=https://valyuta.com/api/get_rate_current_all/RUB/AZN');
    }

    getFullCurrency(data: any) {
        return this
            .httpClient
      .get(`http://localhost:4000/index.php?url=https://valyuta.com/api/get_rate_current_all/${data.currencyBuy}/${data.currencySell}`);
    }

}
