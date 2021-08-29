// react router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from 'store';

// pages
import Configurator from 'pages/Configurator';
import NotFound from 'pages/NotFound';
import Testimonial from 'pages/Testimonial';

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
