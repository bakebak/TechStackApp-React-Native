import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { CreateStore } from 'redux';
import reducers from './reducers';
import { header } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText={"Tech Stack"} />
      </View>
    </Provider>
  );
};

export default App;
