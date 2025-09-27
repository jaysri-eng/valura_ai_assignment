export async function fetchTickers() {
  try {
    const url = `https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&order=asc&limit=20&sort=ticker&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`;
    console.log("Fetching tickers from:", url);

    const res = await fetch(url);
    const data = await res.json();
    // console.log("Fetched data:", data);

    if (!data.results) return [];

    return data.results
    // .filter((t: any) =>
    // t.market === "stocks" &&
    // t.ticker &&
    // t.name &&
    // t.type === "CS" &&
    // (t.primary_exchange === "XNAS" || t.primary_exchange === "XNYS") 
    // )

    .map((t: any) => ({
      ticker: t.ticker,
      name: t.name,
    }));
  } catch (err) {
    console.error("Error fetching tickers:", err);
    return [];
  }
}
