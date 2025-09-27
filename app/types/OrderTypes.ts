export const orderTypes = [
  { id: 'market', name: 'Market', description: 'Buy or Sell at the best available market price', selected: true },
  { id: 'limit', name: 'Limit', description: 'Buy or Sell at a specific price or better', selected: false },
  { id: 'stopLimit', name: 'Stop Limit', description: 'Triggers a limit order when stop price is reached', selected: false },
  { id: 'stopMarket', name: 'Stop Market', description: 'Triggers a Market order when stop price is reached', selected: false },
  { id: 'trailingStop', name: 'Trailing Stop', description: 'Places an order when the price reaches predefined point', selected: false },
  { id: 'scaledOrder', name: 'Scaled Order', description: 'Triggers a Market order when stop price is reached', selected: false },
  { id: 'twap', name: 'TWAP', description: 'Triggers a Market order when stop price is reached', selected: false }
];