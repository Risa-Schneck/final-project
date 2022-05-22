import {GlobalProvider} from '../../context/GlobalState';
import {Header} from './Header';
import { AddIncome } from './AddIncome';

export const Budgeting = () => {
    return (
      <GlobalProvider>
        <Header/>
        <div className = "container">
          <AddIncome />
        </div>
      </GlobalProvider>
    );
    }