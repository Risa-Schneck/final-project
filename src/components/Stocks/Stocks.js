import {GlobalProvider} from '../../context/GlobalState';
import { Header } from './Header';
import { DisplayStocks } from './DisplayStocks';
import {Articles} from './Articles';

export const Stocks = () => {
    return (
      <GlobalProvider>
        <Header/>
        <div>
            <DisplayStocks />
            <Articles />
        </div>
      </GlobalProvider>
    );
  }