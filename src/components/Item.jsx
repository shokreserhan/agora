import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';


class Item extends Component {

    handleChangePrice = () => {
        let newPrice = prompt("Enter new price :" , this.props.item.price) || this.props.item.price
        this.props.Market.changePrice(this.props.item.name, newPrice)
    } 
    render() {
        let item = this.props.item
        let handleBuy = this.props.Market.buyItem
        return (
            <div>
                <li onDoubleClick={this.handleChangePrice}>{item.name} {item.price}$ {item.quantity} <button onClick={() => handleBuy(item.name)}>Buy</button></li>
            </div>
        );
    }
}

export default inject("Market")(observer(Item))