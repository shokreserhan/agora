import { observable, action, makeObservable, observe, computed } from 'mobx'
import { observer } from 'mobx-react'
// import Item from '../components/Item'
import { Item } from './Item';

export class Inventory {
    constructor() {
        this.Items = []
        this.length = 0

        // your code here
        makeObservable(this,{
            Items: observable,
            length: observable,
            addItem: action,
            changePrice: action,
            buyItem: action,
            deleteItem: action,
            numItems: computed
        })

    }
    addItem = (name , price , quantity) => {
        if(name.length === 0 || parseInt(price) < 1 || parseInt(quantity) < 1){
            return
        }
        let item = this.Items.filter(item => item.name === name)
        console.log(item);
        if(this.Items.find(item => item.name === name) === undefined){
            this.Items.push(new Item(name , price , quantity))
            this.length++
        }else{
            let item = this.Items.find(item => item.name === name)
            item.quantity = parseInt(item.quantity) + parseInt(quantity)
            this.length--
        }
    }
    changePrice = (itemName , newPrice) => {
        let item = this.Items.find(item => item.name === itemName)
        if(item !== undefined)
            item.price = newPrice
    }
    deleteItem = (itemName) =>{
        for(let i = 0 ; i < this.length ; i++){
            if(this.Items[i].name === itemName){
                this.Items.splice(i,1)
            }
        } 
    }

    buyItem = (itemName) => {
        let item = this.Items.find(item => item.name === itemName)
        if(item !== undefined){
            item.quantity--
        }
        if(item !== undefined && item.quantity === 0){
            this.deleteItem(itemName)
        }
    }

    get numItems(){
        return this.length
    }
}

export default observer(Inventory)