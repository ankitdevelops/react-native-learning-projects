import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ElevatedCard from './Components/ElevatedCard';
import FlatCard from './Components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
