import { View, StyleSheet } from "react-native";
import { useStocks } from "./hooks/useStocks";
import StockList from "./components/StockList";
import { colors } from "./constants/theme";

export default function Index() {
  const { stocks, loading } = useStocks();
  console.log("stocks", stocks);

  return (
    <View style={styles.container}>
      <StockList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
