import React from 'react';
import './style.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />  
      </Router>
    </React.Fragment>
  );
}

export default App;
