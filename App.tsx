import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Budget Assistant</Text>
      <Button title='AI Assistant' onPress={() => Alert.alert('Coming soon')} />
      <Button title='Add Budget' onPress={() => Alert.alert('Coming soon')} />
      <Button title='Transactions' onPress={() => Alert.alert('Coming soon')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
});
