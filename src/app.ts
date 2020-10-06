
import { Invoice } from './classes/inv.js'
import { List } from './classes/list.js'
import { pay } from './classes/pay.js'
import { format } from './Interfaces/format.js'



const form = document.querySelector('.new-item-form') as HTMLFormElement


// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance

const ul = document.querySelector('ul')!
const list = new List(ul)

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault()
    let doc:format;
    if(type.value === 'invoice'){
        doc = new Invoice (toFrom.value, details.value, amount.valueAsNumber)
    } else{
        doc = new pay(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})



