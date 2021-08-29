// react router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from 'store';

// pages
import Configurator from 'pages/configurator';
import NotFound from 'pages/not-found';
import Testimonial from 'pages/testimonials';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/page-2">
            <Configurator />
          </Route>
          <Route exact path="/page-1">
            <Testimonial />
          </Route>
          <Route exact path="/">
            <Testimonial />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
