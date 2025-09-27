import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { colors } from "../constants/theme";

type Props = {
  ticker: string;
  name: string;
  onPress: () => void;
};

export default function StockItem({ ticker, name, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View>
        <Text style={styles.symbol}>{ticker}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.card,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  symbol: { fontWeight: "bold", fontSize: 18, color: colors.text },
  name: { color: colors.text },
});
