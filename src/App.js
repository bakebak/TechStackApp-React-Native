import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { CreateStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
