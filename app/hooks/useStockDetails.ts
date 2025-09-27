import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { fetchStockDetails } from "../scripts/fetchStockDetails";
import StockDetailsResponse from "../types/StockDetailsResponse";

const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export function useStockDetails(ticker: string) {
  const [data, setData] = useState<StockDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ticker) return;

    const fetchStockWithCache = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        const cacheKey = `stock_${ticker}`;
        const cachedData = await AsyncStorage.getItem(cacheKey);
        
        if (cachedData) {
          const { data: stockData, timestamp } = JSON.parse(cachedData);
          const now = Date.now();
          
          // If cache is still valid (less than 5 minutes old)
          if (now - timestamp < CACHE_EXPIRY) {
            console.log(`Using cached data for ${ticker}`);
            setData(stockData);
            setLoading(false);
            return;
          } else {
            console.log(`Cache expired for ${ticker}, fetching new data`);
            await AsyncStorage.removeItem(cacheKey);
          }
        }

        // Fetch fresh data
        console.log(`Fetching fresh data for ${ticker}`);
        const freshData = await fetchStockDetails(ticker);
        
        // Cache the fresh data
        const cachePayload = {
          data: freshData,
          timestamp: Date.now()
        };
        await AsyncStorage.setItem(cacheKey, JSON.stringify(cachePayload));
        
        setData(freshData);
      } catch (err: any) {
        console.error('Error fetching stock data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStockWithCache();
  }, [ticker]);

  

  return { data, loading, error };
}