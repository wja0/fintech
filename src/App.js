import logo from './logo.svg';
import './App.css';
import NewsSearch from './pages/NewsSearch';
import AxiosTest from "./pages/AxiosTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from './pages/AddUser';
import AuthResult from './pages/AuthResult';

function App() {
  return (
    <Router>
      <Switch>
        <Router path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Router>
        <Router path="/news" exact>
          <NewsSearch></NewsSearch>
        </Router>
        <Router path="/adduser" exact>
          <AddUser></AddUser>
        </Router>
        <Router path="/authResult" exact>
          <AuthResult></AuthResult>
        </Router>   
      </Switch>
    </Router>
  );
}

export default App;
