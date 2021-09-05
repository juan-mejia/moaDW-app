import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'

import './App.css';
import Navbar from "./components/Layout/Navbar";


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar /> 
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:slug" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
