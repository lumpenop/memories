/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {View, TextInput} from 'react-native';

function App() {
  const [text, setText] = React.useState<string>('');

  useEffect(() => {
    console.log(text.split('\n'));
  }, [text]);
  return (
    <View style={{flex: 1}}>
      <TextInput editable multiline onChangeText={setText} value={text} />
    </View>
  );
}

export default App;
