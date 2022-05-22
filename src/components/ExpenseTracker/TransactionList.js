import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <div className = "title">Recents</div>
            <ul id = "list" class = "list">
                {transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction}/> ))}
                   
            </ul> 
        </div>
    )
}