import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceSheetSectionComponent } from './balance-sheet-section.component';

describe('BalanceSheetSectionComponent', () => {
  let component: BalanceSheetSectionComponent;
  let fixture: ComponentFixture<BalanceSheetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceSheetSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceSheetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
