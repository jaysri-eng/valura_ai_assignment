import { useState, useEffect } from "react";
import { fetchTickers } from "../scripts/fetchTickers";

export function useStocks() {
  const [stocks, setStocks] = useState<{ ticker: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchTickers();
      setStocks(data);
      setLoading(false);
    };
    load();
  }, []);

  return { stocks, loading };
}
