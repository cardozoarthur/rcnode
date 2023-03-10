import api from '../api';
import IBaseOutput from '../interfaces/outputs/base-output';
import ICryptocurrencyListOutput from '../interfaces/outputs/cryptocurrency-list-output';

export default class Cryptocurrency {
    private _token: string;
    
    constructor (token: string) {
        this._token = token;
    };

    public async list() {
        return api.get<IBaseOutput<ICryptocurrencyListOutput[]>>('/company/cryptocurrency', {
            params: {
                token_company: this._token,
            },
        });
    };
};