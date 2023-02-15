import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4255484/pexels-photo-4255484.jpeg?auto=compress&cs=tinysrgb&w=400',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>What's new in JavaScript</Text>
          <Text numberOfLines={3} style={styles.bodyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            voluptatem quis provident autem totam excepturi eum ducimus nam
            odit, perferendis amet nulla alias quae enim laborum optio corporis
            eos repellat?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://ankitdevelops.hashnode.dev/')}>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    maxWidth: '100%',
    minHeight: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headerText: {fontSize: 24, fontWeight: '500'},
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
  },
  footerContainer: {
    padding: 10,
    backgroundColor: '#CAD5E2',
  },
  footerText: {
    fontSize: 16,
  },
});
