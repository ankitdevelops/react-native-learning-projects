import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ElevatedCard from './Components/ElevatedCard';
import FancyCard from './Components/FancyCard';
import FlatCard from './Components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
