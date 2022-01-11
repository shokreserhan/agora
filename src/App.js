import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Inventory from './components/Inventory';
import { inject, observer } from 'mobx-react';
import { observe } from 'mobx';

const App = inject("Market")(observer((props) => {
  let market = props.Market
  return (
    <div className="App">
      <Inventory/>
      {market.Items.map((item,index) => 
      <Item item = {item} key={index}/>
      )}
    </div>
  );
}))

export default App