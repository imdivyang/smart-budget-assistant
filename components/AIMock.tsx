
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AIMock() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    setResponse("Try reducing your takeout meals and consider public transport to save more next month.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ask your assistant</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. How can I save money?"
        value={question}
        onChangeText={setQuestion}
      />
      <Button title="Ask" onPress={handleSubmit} />
      {response !== '' && <Text style={styles.response}>{response}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  response: {
    marginTop: 12,
    backgroundColor: '#eef',
    padding: 10,
    borderRadius: 4,
  },
});
