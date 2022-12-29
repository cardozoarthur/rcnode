import { CryptocurrencyOpts } from '../inputs/currency-input.interface';

export default interface ITransactionCreateOutput {
    cryptocurrency: CryptocurrencyOpts;
    val_crypto: number;
    address: string;
    qrcode: string;
    token_transaction: string;
};