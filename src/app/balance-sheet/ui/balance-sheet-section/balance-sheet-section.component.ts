import { Component, input } from '@angular/core';
import { BalanceSheetItem, DebitCreditEnum, ItemCategoryEnum } from '../../models/balance-sheet-item.model';
import { KeyValuePipe } from '@angular/common';
import { TransformTotalValuePipe } from '../../utils/transform-total-value.pipe';
import { SeparateCamelCasePipe } from '../../utils/separate-camel-case.pipe';

@Component({
  selector: 'app-balance-sheet-section',
  standalone: true,
  imports: [KeyValuePipe, TransformTotalValuePipe,SeparateCamelCasePipe],
  templateUrl: './balance-sheet-section.component.html',
  styleUrl: './balance-sheet-section.component.scss'
})
export class BalanceSheetSectionComponent {
  heading = input('');
  dataAfterCategory = input.required<Record<string,BalanceSheetItem[]>>();
  sectionCategories = input.required<Array<ItemCategoryEnum|string>>();

  DebitCreditEnum = DebitCreditEnum;
}
