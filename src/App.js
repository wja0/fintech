import logo from './logo.svg';
import './App.css';
import NewsSearch from './pages/NewsSearch';
import AxiosTest from "./pages/AxiosTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
         
      </Switch>
    </Router>
  );
}

export default App;
