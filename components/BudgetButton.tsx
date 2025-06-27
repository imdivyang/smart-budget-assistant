import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

interface Props {
  title: string;
}

export default function BudgetButton({ title }: Props) {
  return (
    <View style={styles.wrapper}>
      <Button title={title} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
});
