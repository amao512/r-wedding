import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import { connect } from 'react-redux';
import { getPlans } from './redux/plansReducer';

const Home = lazy(() => import('./pages/Home'));
const Create = lazy(() => import('./pages/Create'));
const Prove = lazy(() => import('./pages/Prove'));
const SinglePlan = lazy(() => import('./pages/SinglePlan'));
const MyPlans = lazy(() => import('./pages/MyPlans'));
const Restaurants = lazy(() => import('./pages/Restaurants'));
const SingleRestaurant = lazy(() => import('./pages/SingleRestaurant'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const App = ({ getPlans }) => {

  useEffect(() => {
      getPlans()
  }, [getPlans])

  return (
    <div className="App">
      <Header />

      <Suspense fallback={<Loading />}>
        <Switch>
            <Route exact path='/' component={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={() => <Home />}/>
            <Route exact path='/create' component={() => <Create />} />
            <Route path='/prove' component={() => <Prove /> } />
            <Route exact path='/my-plans' component={() => <MyPlans />} />
            <Route exact path='/plan/:plan?' component={() => <SinglePlan />} />
            <Route exact path='/restaurants' component={() => <Restaurants />} />
            <Route exact path='/restaurants/:restaurant?' component={() => <SingleRestaurant />} />
            <Route component={() => <PageNotFound />} />
        </Switch>
        
        <Footer />
      </Suspense>

    </div>
  );
}

export default connect(null, { getPlans })(App);
