import { format } from "../Interfaces/format.js";

export class List {
    constructor(private container: HTMLUListElement){}

    render(item:format, heading:string, position:'start' | 'end') {
        const li = document.createElement('li')

        const h4 = document.createElement('h4');
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement('p');
        p.innerText = item.from()
        li.append(p)

        if(position === 'start'){
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}