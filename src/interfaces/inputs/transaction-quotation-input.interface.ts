import { CryptocurrencyOpts, CurrencyOpts } from './currency-input.interface';

export default interface ITransactionQuotationInput {
    baseCurrency: CurrencyOpts;
    amount: number;
    cryptocurrency: CryptocurrencyOpts;
};