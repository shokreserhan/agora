import { observable, makeObservable, observe } from 'mobx'
import { observer } from 'mobx-react'

export class Item {

    constructor(name , price , quantity) {
        this.name = name
        this.price = price || 0
        this.quantity = quantity || 1

        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable,
        })
    }
}

export default observer(Item)