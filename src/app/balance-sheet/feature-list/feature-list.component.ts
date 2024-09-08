import { Component, inject } from '@angular/core';
import { BalanceSheetFacade } from '../data-access/balance-sheet.facade';

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {
  facade = inject(BalanceSheetFacade);
  
  ngOnInit(){
    this.facade.loadData();
  }
}
