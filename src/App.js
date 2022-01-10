import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Inventory from './components/Inventory';
import { observer } from 'mobx-react';
import { observe } from 'mobx';

function App(props) {
  let market = props.Market
  return (
    <div className="App">
      <Inventory Market = {market}/>
      {market.Items.map((item,index) => 
      <Item item = {item} key={index} Market = {market}/>
      )}
    </div>
  );
}

export default observer(App)