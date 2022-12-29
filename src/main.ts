import IConfigInput from "./interfaces/inputs/config-input.interface";
import Cryptocurrency from "./modules/cryptocurrency";
import Transaction from "./modules/transaction";

export default class Redecoin {
    public cryptocurrency!: Cryptocurrency;
    public transaction!: Transaction;
    private _token: string;
    private _secret: string;

    constructor(config: IConfigInput) {
        this._token = config.token;
        this._secret = config.secret;
        this.generateModules();
    };

    private generateModules() {
        this.cryptocurrency = new Cryptocurrency(this._token);
        this.transaction = new Transaction(this._token, this._secret);
    };
}