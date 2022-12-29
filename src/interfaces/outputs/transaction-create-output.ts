import { CryptocurrencyOpts } from '../inputs/currency-input';

export default interface ITransactionCreateOutput {
    cryptocurrency: CryptocurrencyOpts;
    val_crypto: number;
    address: string;
    qrcode: string;
    token_transaction: string;
};