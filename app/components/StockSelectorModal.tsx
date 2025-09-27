import { Modal, TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "../constants/styles";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useStockList } from "../hooks/useStockList";

export const StockSelectorModal = () => {
    const { ticker } = useLocalSearchParams<{ ticker: string }>();
    const { stocks, loading: stocksLoading } = useStockList();
      if (!ticker) return null;
    const router = useRouter();
      const [showStockSelector, setShowStockSelector] = useState(false);

    const handleStockSelect = (selectedStock: { ticker: any; name?: string; }) => {
        setShowStockSelector(false);
        if (selectedStock.ticker !== ticker) {
          // Navigate to the new stock
          router.push(`/stock/${selectedStock.ticker}`);
        }
      };
    return (
        <Modal
      visible={showStockSelector}
      transparent
      animationType="fade"
      onRequestClose={() => setShowStockSelector(false)}
    >
      <View style={styles.stockSelectorOverlay}>
        <View style={styles.stockSelectorModal}>
          <View style={styles.stockSelectorHeader}>
            <Text style={styles.stockSelectorTitle}>Select Stock</Text>
            <TouchableOpacity onPress={() => setShowStockSelector(false)}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={stocks}
            keyExtractor={(item) => item.ticker}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.stockSelectorItem,
                  item.ticker === ticker && styles.stockSelectorItemSelected
                ]}
                onPress={() => handleStockSelect(item)}
              >
                <View style={styles.stockSelectorItemLeft}>
                  <Text style={styles.stockSelectorTicker}>{item.ticker}</Text>
                  <Text style={styles.stockSelectorName}>{item.name}</Text>
                </View>
                {item.ticker === ticker && (
                  <View style={styles.selectedIndicator}>
                    <Text style={styles.selectedCheckmark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
    )
}