// import { FlatList, ActivityIndicator } from "react-native";
// import StockItem from "./StockItem";
// import { useRouter } from "expo-router";

// type Props = {
//   stocks: { ticker: string; name: string }[];
//   loading: boolean;
// };

// export default function StockList({ stocks, loading }: Props) {
//   const router = useRouter();

//   if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

//   return (
//     <FlatList
//       data={stocks}
//       keyExtractor={(item) => item.ticker}
//       renderItem={({ item }) => (
//         <StockItem
//           ticker={item.ticker}
//           name={item.name}
//           onPress={() => router.push(`/stock/${item.ticker}`)}
//         />
//       )}
//     />
//   );
// }

// import React from 'react';
// import { FlatList, ActivityIndicator, Text, View } from "react-native";
// import StockItem from "./StockItem";
// import { useRouter } from "expo-router";
// import { useStockList } from "../hooks/useStockList";

// export default function StockList() {
//   const router = useRouter();
//   const { stocks, loading, error } = useStockList();

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//         <Text style={{ marginTop: 10 }}>Loading stocks...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Error loading stocks: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={stocks}
//       keyExtractor={(item) => item.ticker}
//       renderItem={({ item }) => (
//         <StockItem
//           ticker={item.ticker}
//           name={item.name}
//           onPress={() => router.push(`/stock/${item.ticker}`)}
//         />
//       )}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// }


// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { useRouter } from 'expo-router';

// interface Stock {
//   ticker: string;
//   name: string;
// }

// interface StockListProps {
//   stocks: Stock[];
//   loading: boolean;
// }

// const StockList: React.FC<StockListProps> = ({ stocks, loading }) => {
//   const router = useRouter();

//   const handleStockPress = (ticker: string) => {
//     router.push(`/stock/${ticker}`);
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//         <Text>Loading stocks...</Text>
//       </View>
//     );
//   }

//   const renderStock = ({ item }: { item: Stock }) => (
//     <TouchableOpacity
//       style={{
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E0E0E0',
//         backgroundColor: '#FFFFFF',
//       }}
//       onPress={() => handleStockPress(item.ticker)}
//     >
//       <Text style={{ fontSize: 16, fontWeight: '600', color: '#333333' }}>
//         {item.ticker}
//       </Text>
//       <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>
//         {item.name}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={stocks}
//       keyExtractor={(item) => item.ticker}
//       renderItem={renderStock}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// };

// export default StockList;

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
