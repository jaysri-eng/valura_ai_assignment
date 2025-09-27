import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../constants/styles';
import { useStockDetails } from "../hooks/useStockDetails";
import { colors } from '../constants/colors';
import StockDetails from '../types/Stock';
import { BottomSection } from '../components/BottomSection';
import BuySellTabs from '../components/BuySellTabs';
import { AddFundsModal } from '../components/AddFundsModal';
import { StockSelectorModal } from '../components/StockSelectorModal';
import { Header } from '../components/Header';

const { width, height } = Dimensions.get('window');


export default function StockPage() {
  const { ticker } = useLocalSearchParams<{ ticker: string }>();
  if (!ticker) return null; // or a small loader
  const { data, loading, error } = useStockDetails(ticker);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [autoFocusInput, setAutoFocusInput] = useState(false);

  useEffect(() => {
    if (showAddFunds) {
      setAutoFocusInput(true);
    }
  }, [showAddFunds]);

  // New state from second file for stock selector
      const [currentStock, setCurrentStock] = useState<StockDetails | null>(null);


  useEffect(() => {
    console.log('Ticker param:', ticker);
    console.log("logo url of ticker is",currentStock?.logo_url);
  }, [ticker]);

  // useEffect(() => {
  //   console.log('Stock data:', data);
  //   if (data && data.results) {
  //     setCurrentStock({
  //       ticker: data.results.ticker,
  //       name: data.results.name,
  //       logo_url: data.results.branding.logo_url,
  //     });
  //   }
  // }, [data]);
  useEffect(() => {
    console.log('Stock data:', data);
    if (data && data.results) {
      const branding = data.results.branding;
      let logoUrl = branding?.logo_url;

      // If you want to append API key (for Polygon authenticated access)
      if (logoUrl) {
        // Example: add apiKey query param
        const url = new URL(logoUrl);
        url.searchParams.set('apiKey',"p5ib2jhfBw_WpX3dvgVVniOp5NQwdFKP" );
        logoUrl = url.toString();
        console.log(logoUrl);
      }

      setCurrentStock({
        ticker: data.results.ticker,
        name: data.results.name,
        logo_url: logoUrl,
      });
    }
  }, [data]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.mintGreen} barStyle="dark-content" />
        <View style={styles.loadingContainer}>
          <Text>Loading stock data...</Text>
        </View>
      </SafeAreaView>
    );
  }
  if (!ticker) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.mintGreen} barStyle="dark-content" />
      <Text>Loading ticker…</Text>
    </SafeAreaView>
  );
}

  if (!data) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.mintGreen} barStyle="dark-content" />
        <Text>No details available for this ticker.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.mintGreen} barStyle="dark-content" />
      <Header currentStock={currentStock}/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}  style={styles.scrollContent}>
        <View style={styles.content}>
          <BuySellTabs/>
        </View>
        {/* Bottom Section */}
        <BottomSection/>
      </ScrollView>
      {/* All Modals */}
      <StockSelectorModal />
    </SafeAreaView>
  );
}