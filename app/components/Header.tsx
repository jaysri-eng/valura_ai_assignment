import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../constants/styles";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StockMoreButton } from "./StockMoreButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import { useStockList } from "../hooks/useStockList";
import StockDetails from "../types/Stock";

interface HeaderProps {
  currentStock: StockDetails | null;
}

export const Header: React.FC<HeaderProps> = ({ currentStock }) => {
  const router = useRouter();
  const { ticker } = useLocalSearchParams<{ ticker: string }>();
  const { stocks, loading: stocksLoading } = useStockList();
  if (!ticker) return null;
  const [showStockSelector, setShowStockSelector] = useState(false);

  const handleStockSelect = (selectedStock: { ticker: any; name?: string }) => {
    setShowStockSelector(false);
    if (selectedStock.ticker !== ticker) {
      // Navigate to the new stock
      router.push(`/stock/${selectedStock.ticker}`);
    }
  };
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <RNPickerSelect
          onValueChange={(value) => {
            const selectedStock = stocks.find((s) => s.ticker === value);
            if (selectedStock) {
              handleStockSelect(selectedStock);
            }
          }}
          items={stocks.map((stock) => ({
            label: stock.name,
            value: stock.ticker,
            key: stock.ticker,
          }))}
          value={currentStock?.ticker || ticker}
          style={{
            inputIOS: styles.headerCenter,
            inputAndroid: styles.headerCenter,
            iconContainer: {
              right: 5,
              // top: 12,
              padding: 10,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <Ionicons
              name="chevron-down-outline"
              size={16}
              color="green"
              style={styles.headerSubtitle}
            />
          )}
        />
      </View>
      <StockMoreButton ticker={currentStock?.ticker || ""} />
    </View>
  );
};
