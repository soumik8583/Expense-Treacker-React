import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);


  const onSubmit = e => {
      
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    /*const amnt = document.getElementById('amInput');
    const detl = document.getElementById('detail');
    amnt.target.value='';
    detl.target.value='';*/
    addTransaction(newTransaction);
   
  
  }

  return (
    <>
      <h3 className="history">Add new Items below</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Details</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Details" id='detail'/>
        </div>
        <div className="form-control">
          <label htmlFor="amount" >
          Amount <br />
            <span style={{color:'#A8A8A8'}}>
            (Use '-' before amount in case of expense)
            </span></label>
          
          <input type="number" id='amInput' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
        </div>
        <button className="btn" onClick="resetName">Add</button>
      </form>
    </>
  )
}
