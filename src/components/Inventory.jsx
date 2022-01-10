import { observe } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component, useState } from 'react';

const Inventory = observer((props) => {
    const [Inputs , setInputs] = useState({ name: '', price: 0, quantity: 1 })

    const handleInput = e => {
        let tempInputs = {...Inputs}
        tempInputs[e.target.className] = e.target.value
        setInputs(tempInputs)
    }

    const addItem = () => {
        props.Market.addItem(Inputs.name , Inputs.price , Inputs.quantity) 
        setInputs({name: '', price: 0, quantity: 1})
    }

    return (
        <div>
            <input className={'name'} onChange={handleInput} placeholder='Name...' value={Inputs.name}/>
            <input className={'price'} onChange={handleInput} placeholder='Price...' value={Inputs.price}/>
            <input className={'quantity'} onChange={handleInput} placeholder='Quantity...' value={Inputs.quantity}/>
            <button className='Add-Button' onClick={addItem}>Add</button>
        </div>
    );
})

export default Inventory