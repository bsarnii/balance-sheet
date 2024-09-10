import { Component, computed, inject } from '@angular/core';
import { BalanceSheetFacade } from '../data-access/balance-sheet.facade';
import { ItemCategoryEnum, BalanceSheetItem } from '../models/balance-sheet-item.model';
import { BalanceSheetSectionComponent } from '../ui/balance-sheet-section/balance-sheet-section.component';

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [BalanceSheetSectionComponent],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {
  facade = inject(BalanceSheetFacade);
  
  ngOnInit(){
    this.facade.loadData();
  }

  ItemCategoryEnum = ItemCategoryEnum;

  sortedDataAfterCategory = computed(() => {
    const data = this.facade.data();

    return data.reduce(
      (acc, item) => ({
          ...acc,
          [item.category]: [...(acc[item.category] || []), item]
      }),
      {} as Record<string,BalanceSheetItem[]>
  );
  })

}

