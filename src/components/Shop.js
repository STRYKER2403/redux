import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from "../State/index"

const Shop = () => {

  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const {depositMoney,withdrawMoney} = actions;
  const amount = useSelector(state => state.amount);

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>

      {/* Without bind action creators */}

      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

      {/* With bind action creators */} 

      <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
      Update Balance ({amount})
      <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
    </div>
  )
}

export default Shop
