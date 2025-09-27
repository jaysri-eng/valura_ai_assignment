import StockDetailsResponse from "../types/StockDetailsResponse";

export const fetchStockDetails = async (ticker: string): Promise<StockDetailsResponse> => {
  console.log(`Fetching data for ${ticker}`);
  const response = await fetch(
    `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${process.env.EXPO_PUBLIC_API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};