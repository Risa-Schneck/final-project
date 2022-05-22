import {React} from 'react';

export const Header = () => {
    return (
        <div className = "mainHeader">
            Budget Calculator
            <p className = "subtitle">20%-30%-50% rule</p>
            <p className = "title">This budget rule says you should spend 50% of your savings on needs, 20% debt repayment and savings,
                and 30% on whatever else you might want.
            </p>
            <p className = "title">Click on the button below to calculate what percentage of your income should go where.</p>
        </div>
    )
}
            