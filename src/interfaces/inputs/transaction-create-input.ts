import { CryptocurrencyOpts, CurrencyOpts } from './currency-input';

export default interface ITransactionCreateInput {
    baseCurrency: CurrencyOpts;
    amount: number;
    cryptocurrency: CryptocurrencyOpts;
    clientEmail: string;
    quotationToken?: string;
};