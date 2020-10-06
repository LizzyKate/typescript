export class pay {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    from() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
