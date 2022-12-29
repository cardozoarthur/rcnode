import { CryptocurrencyOpts, CurrencyOpts } from './currency-input';

export default interface ITransactionQuotationInput {
    baseCurrency: CurrencyOpts;
    amount: number;
    cryptocurrency: CryptocurrencyOpts;
};