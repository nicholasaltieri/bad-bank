import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import CreateAccount from './pages/createaccount';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import AllData from './pages/alldata';
import Home from './pages/home';


function App() {
  return (
    <div className='App'>

    <Router>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Bad Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/createaccount">Create Account</Nav.Link>
            <Nav.Link as={Link} to='/withdraw'>Withdraw</Nav.Link>
            <Nav.Link as={Link} to='/deposit'>Deposit</Nav.Link>
            <Nav.Link as={Link} to='/alldata' >All Data</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        </>
      
      <Routes>
        <Route path="/" element = { <Home/> }> </Route>
        <Route path="/createaccount" element = { <CreateAccount/> }> </Route>
        <Route path='/deposit' element = { <Deposit /> }> </Route>
        <Route path='/withdraw' element = { <Withdraw /> }> </Route>
        <Route path='/alldata' element = { <AllData /> }> </Route>
      </Routes>
    </Router>
    
  </div>
  );
}

export default App;
