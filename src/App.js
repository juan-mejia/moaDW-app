import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
