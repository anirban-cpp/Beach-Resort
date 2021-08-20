import './App.css';
import { Home } from './pages/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Rooms } from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:route' component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
