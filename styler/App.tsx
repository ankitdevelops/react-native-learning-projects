import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ActionCard from './Components/ActionCard';
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
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
