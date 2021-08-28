import { Provider } from 'react-redux';
import store from 'store';

import Sample from 'components/Sample';

function App() {
  return (
    <Provider store={store}>
      <h1>works</h1>
      <Sample />
    </Provider>
  );
}

export default App;
