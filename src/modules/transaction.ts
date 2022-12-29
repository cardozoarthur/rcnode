import { v4 as uuid } from 'uuid';
import api from '../api';
import ITransactionCancelInput from '../interfaces/inputs/transaction-cancel-input';
import ITransactionCreateInput from '../interfaces/inputs/transaction-create-input';
import ITransactionListInput from '../interfaces/inputs/transaction-list-input';
import ITransactionQuotationInput from '../interfaces/inputs/transaction-quotation-input';
import IBaseOutput from '../interfaces/outputs/base-output';
import ITransactionCreateOutput from '../interfaces/outputs/transaction-create-output';
import ITransactionListOutput from '../interfaces/outputs/transaction-list-output';
import ITransactionQuotationOutput from '../interfaces/outputs/transaction-quotation-output';

export default class Transaction {
    private _token: string;
    private _secret: string;

    constructor(token: string, secret: string) {
        this._token = token;
        this._secret = secret;
    };

    public async create(input: ITransactionCreateInput) {
        const referId = await this.uuid();
        return api.get<IBaseOutput<ITransactionCreateOutput>>('/transaction/create', {
            params: {
                token_company: this._token,
                base_currency: input.baseCurrency,
                val_base: input.amount,
                cryptocurrency: input.cryptocurrency,
                email_client: input.clientEmail,
                refer_id: referId,
                token_value: input.quotationToken,
            },
        });
    };

    public async quotation(input: ITransactionQuotationInput) {
        return api.get<IBaseOutput<ITransactionQuotationOutput>>('/value', {
            params: {
                token_company: this._token,
                base_currency: input.baseCurrency,
                val_base: input.amount,
                cryptocurrency: input.cryptocurrency,
            },
        });
    };

    public async list(input: ITransactionListInput) {
        return api.get<IBaseOutput<ITransactionListOutput>>('/transaction/list', {
            params: {
                secret_key: this._secret,
                token_transaction: input.token_transaction,
                limit: input.limit,
                page: input.page,
            },
        });
    };
    
    public async cancel(input: ITransactionCancelInput) {
        return api.get('/transaction/cancel', {
            params: {
                secret_key: this._secret,
                token_transaction: input.token_transaction,
                full_refund: input.fullRefund,
            },
        });
    };

    private async uuid() {
        return uuid();
    };
};