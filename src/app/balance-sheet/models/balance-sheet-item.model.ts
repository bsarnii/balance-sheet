export interface BalanceSheetItem {
    accountId: string
    category: ItemCategoryEnum
    accountNumber: string
    accountName: string
    debitCredit: DebitCreditEnum
    openDebitBalance: number
    openCreditBalance: number
    ytdDebitValue: number
    ytdCreditValue: number
}

export enum ItemCategoryEnum {
    current_asset = 'CurrentAsset',
    long_term_asset = 'LongTermAsset',
    current_liabilities = 'CurrentLiabilities',
    long_term_liabilities = 'LongTermLiabilities',
    equity = 'Equity',
    retained_earnings = 'Retained Earnings'
}

export enum DebitCreditEnum {
    debit = 'Debit',
    credit = 'Credit'
}