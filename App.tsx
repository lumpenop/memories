/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {WebView} from 'react-native-webview';
import {View} from 'react-native';

function App() {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://naver.com/'}} style={{flex: 1}} />
    </View>
  );
}

export default App;
