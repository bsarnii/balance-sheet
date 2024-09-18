import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetSubcategoryComponent } from './balance-sheet-subcategory.component';

describe('BalanceSheetSubcategoryComponent', () => {
  let component: BalanceSheetSubcategoryComponent;
  let fixture: ComponentFixture<BalanceSheetSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceSheetSubcategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceSheetSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
