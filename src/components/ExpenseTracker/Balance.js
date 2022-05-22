import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <div className = "title">Your Balance</div>
            <div className = {total < 0 ? 'total-minus' : 'total-plus'}>${total}</div>
        </div>
    )
}