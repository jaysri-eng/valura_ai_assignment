import React, { useState } from "react";
import { View, Text, TouchableOpacity, useWindowDimensions, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { colors } from "../constants/colors";
import { styles } from "../constants/styles";
import { BuyTab } from "./BuyTab";
import { SellTab } from "./SellTab";

export default function BuySellTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "buy", title: "Buy" },
    { key: "sell", title: "Sell" },
  ]);

  const renderScene = SceneMap({
    buy: BuyTab,
    sell: SellTab,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => {
        return (
          <View style={styles.tabContainer}>
            {props.navigationState.routes.map((route, idx) => {
              const focused = props.navigationState.index === idx;
              return (
                <TouchableOpacity
                  key={route.key}
                  style={[styles.tab, focused ? styles.activeTab : styles.inactiveTab]}
                  onPress={() => setIndex(idx)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.tabText,
                      route.title === "Sell"
                        ? focused
                        ? { color: colors.white } 
                        : { color: "red" }        
                        : focused
                        ? { color: colors.white }   
                        : { color: "gray" },   
                    ]}
                  >
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}
    />
  );
}

