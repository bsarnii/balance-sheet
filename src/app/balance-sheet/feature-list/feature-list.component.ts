import { Component, computed, ElementRef, inject, ViewChild } from '@angular/core';
import { BalanceSheetFacade } from '../data-access/balance-sheet.facade';
import { ItemCategoryEnum, BalanceSheetItem } from '../models/balance-sheet-item.model';
import { BalanceSheetSectionComponent } from '../ui/balance-sheet-section/balance-sheet-section.component';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [BalanceSheetSectionComponent],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {
  facade = inject(BalanceSheetFacade);

  @ViewChild('balanceSheetWrapper') balanceSheet!:ElementRef<HTMLDivElement>
  
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

  generatePDF(){
    const el = this.balanceSheet.nativeElement;
    const pdf = new jspdf.jsPDF('p', 'pt', 'a4');
    pdf.html(el, {
      margin: [10, 10, 10, 10], // Adjust margins to ensure content fits
      callback:function (el) {
        window.open(pdf.output('bloburl'))
        el.save()
      }
    })
  }

}

