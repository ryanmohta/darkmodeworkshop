import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Yams from './Yams/Yams';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        {
        // <nav>
        //   <ul>
        //     <li>
        //       <h3>Dim the Lights</h3>
        //     </li>
        //     <li>
        //       <Link to="/">Yams</Link>
        //     </li>
        //     <li>
        //       <Link to="/about">About</Link>
        //     </li>
        //     <li>
        //       <Link to="/contact">Contact</Link>
        //     </li>
        //   </ul>
        // </nav>
      }

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Yams />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
