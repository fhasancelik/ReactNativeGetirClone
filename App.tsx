import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';




import RootNavigators from './src/navigators/RootNavigators';
import store from './src/redux/store';











function App(): JSX.Element {
  


  return (
<Provider  store={store}>
<NavigationContainer>
  <RootNavigators/>
</NavigationContainer>
</Provider>
  );
}


export default App;
