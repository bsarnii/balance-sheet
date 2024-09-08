import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceSheetItem } from '../models/balance-sheet-item.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceSheetDataService {
    http = inject(HttpClient);

    get():Observable<BalanceSheetItem[]>{
        return this.http.get<BalanceSheetItem[]>('./balance-sheet-data.json');
    }
}
