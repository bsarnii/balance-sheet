import { Component, computed, input } from '@angular/core';
import { BalanceSheetItem, DebitCreditEnum } from '../../models/balance-sheet-item.model';
import { TransformTotalValuePipe } from "../../utils/transform-total-value.pipe";

enum ItemTypesEnum {
  itemWithSubAccounts = 'itemWithSubAccounts',
  itemWithoutSubAccounts = 'itemWithoutSubAccounts'
}

interface ItemWithSubAccount {
  accountName: string;
  subAccounts: BalanceSheetItem[];
  totalValue: number;
  type: ItemTypesEnum.itemWithSubAccounts
}

@Component({
  selector: 'app-balance-sheet-subcategory',
  standalone: true,
  imports: [TransformTotalValuePipe],
  templateUrl: './balance-sheet-subcategory.component.html',
  styleUrl: './balance-sheet-subcategory.component.scss'
})
export class BalanceSheetSubcategoryComponent {
  items = input<BalanceSheetItem[]>([]);
  DebitCreditEnum = DebitCreditEnum;

  formattedItems = computed(():Array<BalanceSheetItem & {type: ItemTypesEnum.itemWithoutSubAccounts} | ItemWithSubAccount> => {
    const filterAfterisSubAccount = this.items().filter(value => !value.isSubAccount);
    return filterAfterisSubAccount.map(item => {
      const subAccounts = this.getSubAccounts(item);
      if(subAccounts.length > 0){
        return {
          accountName: item.accountName,
          subAccounts: [...subAccounts, item],
          totalValue: this.getTotalValue([...subAccounts, item]),
          type: ItemTypesEnum.itemWithSubAccounts
        }
      } else {
        return {...item, type: ItemTypesEnum.itemWithoutSubAccounts}
      }
    })
  });


  getSubAccounts(currentItem:BalanceSheetItem){
    return this.items().filter(item => 
      (item.parentAccountId === currentItem.accountId) && (item.accountId !== item.parentAccountId)
    );
  }

  getTotalValue(items:BalanceSheetItem[]){
    return items.map(item => {
      const debitValue = item.openDebitBalance + item.ytdDebitValue;
      const creditValue = item.openCreditBalance + item.ytdCreditValue;
      if(item.debitCredit === 'Debit'){
        return debitValue - creditValue
      } else{
        return creditValue - debitValue
      }
    }).reduce((a, b) => a + b, 0)
  }

  ItemTypesEnum = ItemTypesEnum;
}
