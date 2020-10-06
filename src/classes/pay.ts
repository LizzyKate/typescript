import { format} from '../Interfaces/format.js'


export class pay implements format{
    readonly  recipient: string;
    private details: string;
    public amount: number;

    constructor(c:string, d:string, a:number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    from(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}