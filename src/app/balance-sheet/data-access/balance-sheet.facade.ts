import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BalanceSheetDataService } from './balance-sheet-data.service';
import { BalanceSheetItem } from '../models/balance-sheet-item.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceSheetFacade {
  dataService = inject(BalanceSheetDataService);

  private _data:WritableSignal<BalanceSheetItem[]> = signal([]);

  public readonly data = computed(() => this._data());

  loadData(){
    this.dataService.get().subscribe((data => this._data.set(data)));
  }
}
