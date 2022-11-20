export const enum CURRENCY {
  USD = 'usd',
  EUR = 'eur',
  CAD = 'cad',
  AUD = 'aud',
  CHF = 'chf',
  GBP = 'gbp',
}

export interface Coin {
  id: string;
  name: string;
  image: string;
  currentPrice: string;
  circulatingSupply: string;
  totalSupply: string;
}

export interface Option {
  value: string;
  label: string;
  symbol?: string;
}
