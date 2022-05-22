import {GlobalProvider} from '../../context/GlobalState';
import {Header} from './Header';
import {Balance} from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

export const Tracker = () => {
    return (
      <GlobalProvider>
        <Header/>
        <div className = "container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    );
  }

  