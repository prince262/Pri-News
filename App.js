/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList, TouchableOpacity, ActivityIndicator
} from 'react-native';


// import data from './data.json'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getdata } from './src/redux/action';
import { appPersist, store, } from './src/redux/store';
import Screen from './src/screen/Screen';
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {

  const [offset, setOffset] = useState(1);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { data } = useSelector(state => state.datareducer)
  useEffect(() => {
    // fetchResults();

  },

    []);

  return (
    <Provider store={store}>
      <PersistGate persistor={appPersist} loading={null}>
        <Screen />
      </PersistGate>
    </Provider>
  );
};



export default App;
