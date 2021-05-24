import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Different pages on website
import AboutPage from './components/AboutPage/AboutPage';
import Navbar from './components/Nav/Navbar';
import RentAVan from './components/RentAVan/RentAVan';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* Home page */}
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/rent">
            <RentAVan />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
