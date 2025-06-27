// 1. **Transactions View**

//    - Load and display the mock transaction list from `data/transactions.json`
//    - Group transactions by `category`
//    - Show total spending per category and total spent overall
//    - [optional] Use a **virtualized list** (e.g. `FlatList`) for performance if the dataset is large

import React, { useMemo } from "react";
import {
  FlatList,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import transactionData from "./data/transactions.json";

interface transactionData {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
}

export default function App() {
  // this function will return the transaction data categories wise and overall Total of the transaction
  const { transactionCategories, overallTotal } = useMemo(() => {
    const finalData = transactionData.reduce(
      (acc, cuu) => {
        acc.overallTotal += cuu.amount; // this one is store the cumulative value of all the transaction

        const found = acc.categories.find(
          (item) => item.title === cuu.category
        ); // this is here found the item from array to check category is already inside the array or not

        // here i am checking if item is already exist or not in array
        if (found) {
          // if item is exist than i push that item data into that particular category
          found.data.push(cuu);
        }

        // if category is not exist than i push item with title,data, and there total amount first time in the cuu
        else {
          acc.categories.push({
            title: cuu.category,
            data: [cuu],
            total: cuu.amount,
          });
        }

        // after iterate over all the transaction i return the acc to get final result
        return acc;
      },
      {
        categories: [] as {
          title: string;
          data: transactionData[];
          total: number;
        }[],
        overallTotal: 0,
      }
    );

    // this 2 parameter i return for render the section list and display the total transaction Total
    return {
      transactionCategories: finalData.categories,
      overallTotal: finalData.overallTotal,
    };
  }, [transactionData]);

  // this render method is to render the all transaction
  const renderItem = ({ item }: { item: transactionData }) => {
    return (
      <View style={styles.transactionContainer}>
        <View style={styles.safeAreaContainer}>
          <Text style={styles.dateLabel}>{item.date}</Text>
        </View>
        <View style={styles.details}>
          <Text>{item.description}</Text>
          <Text>£{item.amount}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        {/* flatlist to render the all transaction   */}
        <FlatList
          data={transactionData}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
        />

        {/* section list to render the transaction categories wise */}
        <SectionList
          sections={transactionCategories}
          keyExtractor={(item, index) => item.id}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.title}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={{}}>{item.description}</Text>
              <Text style={{}}>£{item.amount}</Text>
            </View>
          )}
          renderSectionFooter={({ section }) => (
            <Text style={styles.sectionTotal}>
              Total: £{section.total.toFixed(2)}
            </Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.overTotalInfo}>
              Total of All Transactions: £{overallTotal.toFixed(2)}
            </Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  safeAreaContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  contentContainerStyle: {},
  transactionContainer: {
    borderWidth: 1,
    borderColor: "#eb4034",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    flex: 1,
    alignItems: "flex-end",
  },
  dateLabel: {
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTotal: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "right",
    borderBottomWidth: 1,
    borderBottomColor: "#eb4034",
  },
  overTotalInfo: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 20,
  },
});
