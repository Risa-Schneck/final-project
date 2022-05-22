import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const AddIncome = () => {
    const [income, setIncome] = useState('');
    const [needs, setNeeds] = useState('');
    const [wants, setWants] = useState('');
    const [savings, setSavings] = useState('');
    const {addIncome} = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();
        
        setNeeds((income * .5).toFixed(2));
        setWants((income * .3).toFixed(2));
        setSavings((income * .2).toFixed(2));

        setIncome('');
    }

    return (
        <div>
            <div className = "budget-container">
            <table className = "table">
                <tr>
                    <td><div className = "budget-head">Needs</div></td>
                    <td></td>
                    <td><div className = "budget-head">Wants</div></td>
                    <td></td>
                    <td><div className = "budget-head">Savings</div></td>
                </tr>
                <tr>
                    <td><p className = "money">${needs}</p></td>
                    <td></td>
                    <td><p className = "money">${wants}</p></td>
                    <td></td>
                    <td><p className = "money">${savings}</p></td>
                </tr>
            </table>
            </div>
            <form onSubmit ={onSubmit}>
                <div className = "form-control">
                    <input type = "number" value = {income} onChange = {(e) => setIncome(e.target.value)} placeholder = "Enter income..." />
                    <button className = "btn">Calculate</button>
                </div>
            </form>
            
        </div>
    )
}