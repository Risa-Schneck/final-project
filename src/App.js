import { Tracker} from './components/ExpenseTracker/Tracker';
import { Budgeting} from './components/BudgetTips/Budgeting';
import {Header} from './components/Header/Header';
import { Stocks } from './components/Stocks/Stocks';
import {HashRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
     
        <HashRouter>
          <Header />
          <Routes>
            <Route path= "/" element = {<Budgeting />}></Route>
            <Route path="/Tracker" element={<Tracker />}></Route>
            <Route path = "/Stocks" element = {<Stocks />}></Route>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
