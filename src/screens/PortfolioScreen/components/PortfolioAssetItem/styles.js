import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    // width: Dimensions,
    // alignSelf: "flex-end",
  },
  ticker: {
    color: "grey",
    fontWeight: "700",
    marginTop: 5,
  },
  coinContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    // justifyContent: "space-around",
    backgroundColor: "#121212",
  },
  quantityContainer: {
    marginLeft: "auto",
    width: 90,
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
});

export default styles;
