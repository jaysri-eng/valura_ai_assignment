import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export const STOCKS = [
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "MSFT", name: "Microsoft Corp." },
  { ticker: "GOOGL", name: "Alphabet Inc." },
  { ticker: "AMZN", name: "Amazon.com Inc." },
  { ticker: "TSLA", name: "Tesla Inc." },
  { ticker: "NVIDIA", name: "Nvidia" },
];

interface Stock {
  ticker: string;
  name: string;
}

const StockList: React.FC = () => {
  const router = useRouter();

  const handleStockPress = (ticker: string) => {
    router.push(`/stock/${ticker}`);
  };

  const renderStock = ({ item }: { item: Stock }) => (
    <TouchableOpacity
      style={{
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        backgroundColor: "#FFFFFF",
      }}
      onPress={() => handleStockPress(item.ticker)}
    >
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#333333" }}>
        {item.ticker}
      </Text>
      <Text style={{ fontSize: 12, color: "#9E9E9E", marginTop: 2 }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={STOCKS}
      keyExtractor={(item) => item.ticker}
      renderItem={renderStock}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default StockList;
