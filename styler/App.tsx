import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './Components/FlatCard';

import Falt from './Falt';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <Falt />
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
