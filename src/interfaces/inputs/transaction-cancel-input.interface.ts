enum fullRefund {
    yes = 'S',
    no = 'N'
}

export default interface ITransactionCancelInput {
    token_transaction: string;
    fullRefund: fullRefund;
}