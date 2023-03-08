import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';
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
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
