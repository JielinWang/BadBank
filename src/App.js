import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './Components/context';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import AllData from './Components/AllData';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}></div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/all-data' element={<AllData />} />
        </Routes>
      </UserContext.Provider>
   </BrowserRouter>
  );
}

export default App;
