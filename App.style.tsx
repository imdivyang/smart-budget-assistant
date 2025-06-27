import { StyleSheet } from "react-native";

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
    marginTop: 20,
    textAlign: "right",
  },
});

export default styles;
