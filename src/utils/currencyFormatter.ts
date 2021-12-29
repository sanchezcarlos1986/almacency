type Currency = 'CLP' | 'USD' | 'JPY' | 'EUR';
type Locale = 'es-ES' | 'en-US' | 'jp-JP';

type Price = {
  price: number;
  locale?: Locale;
  currency?: Currency;
};

export const currencyFormatter = ({
  price,
  locale = 'en-US',
  currency = 'USD',
}: Price): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(price);
};
