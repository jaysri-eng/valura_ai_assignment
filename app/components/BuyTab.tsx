import { View } from "react-native";
import { OrderTypeDropdown } from "./OrderTypeDropdown";
import CustomSlider from "./CustomSlider";
import { TpslSection } from "./TpslSection";
import { PriceSection } from "./PriceSizeSection";

export const BuyTab = () => (
  <View style={{marginHorizontal: 2}}>
    <OrderTypeDropdown/>
    <PriceSection/>
    <CustomSlider/>
    <TpslSection/>
  </View>
);