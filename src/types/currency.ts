export type Currency = Record<string, number>;
export interface DataCurrency {
  base: string;
  date: string;
  rates: Currency;
}
export interface ListConvertors {
  value: string;
  currency: string;
}
