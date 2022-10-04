import React from 'react';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import {setupStore} from './store/store';
const App = () => {
  return (
    <Provider store={setupStore()}>
      <Navigation />
    </Provider>
  );
};

export default App;
