import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Create from './pages/Create';
import Prove from './pages/Prove';
import SinglePlan from './pages/SinglePlan';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path='/' component={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={() => <Home />}/>
        <Route exact path='/create' component={() => <Create />} />
        <Route path='/prove' component={() => <Prove /> } />
        <Route path='/plan' component={() => <SinglePlan />} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
