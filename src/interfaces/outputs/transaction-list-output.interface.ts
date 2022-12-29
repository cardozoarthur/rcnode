import { CryptocurrencyOpts, CurrencyOpts } from '../inputs/currency-input.interface';

export default interface ITransactionListOutput {
    company_id: number;
    company_name: string;
    val_quotation: string;
    base_currency: CurrencyOpts;
    val_base: number;
    cryptocurrency: CryptocurrencyOpts;
    val_crypto: number;
    val_liquid_base: number;
    postback: string;
    refer_id: string;
    status_transaction: string;
    date_payment: string;
    val_pay: number;
    token_transaction: string;
    date_created: string;
    address: string;
};