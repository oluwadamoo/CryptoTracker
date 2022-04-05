import React from "react";
import { View, Text, Image ,Dimensions} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const PortfolioAssetsItem = ({ assetItem }) => {
  const {
    currentPrice,
    image,
    name,
    priceChangePercentage,
    quantityBought,
    ticker,
  } = assetItem;

  const isChangePositive = () => priceChangePercentage >= 0;

  const renderHoldings = () => (quantityBought * currentPrice).toFixed(2)

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{ uri: image }}
        style={{ height: 30, width: 30, marginRight: 10, alignSelf: "center" }}
      />
      <View style={{width:Dimensions.get("screen").width - 250, marginRight:10}}>
        <Text numberOfLines={1} style={[styles.title,{width:Dimensions.get("screen").width - 250} ]}>{name}</Text>
        <Text style={[styles.ticker,{width:Dimensions.get("screen").width - 250}]}>{ticker}</Text>
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal:2  }}>
        <Text style={[styles.title, {width:100}]}>{currentPrice}</Text>
        <View style={{ flexDirection: "row", width:100 }}>
          <AntDesign
            name={isChangePositive() ? "caretup" : "caretdown"}
            size={12}
            color={isChangePositive() ? "#16c784" : "#ea3943"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text
            style={{
              color: isChangePositive() ? "#16c784" : "#ea3943",
              fontWeight: "600",
            }}
          >
            {priceChangePercentage?.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={[styles.quantityContainer]}>
        <Text style={[styles.title, {width:80}]} numberOfLines={1}>${renderHoldings()}</Text>
        <Text style={[styles.ticker, {width:80}]} numberOfLines={1} ellipsizeMode="tail">
          {quantityBought}
          {" "}
           {ticker}
        </Text>
        </View>
    </View>
  );
};

export default PortfolioAssetsItem;
