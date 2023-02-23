import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 character')
    .max(16, 'Should be maximum of 16 character')
    .required('Length is required'),
});
const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
