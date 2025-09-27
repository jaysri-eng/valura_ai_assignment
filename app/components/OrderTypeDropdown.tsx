import { View, Text } from "react-native";
import { styles } from "../constants/styles";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from 'react-native-picker-select';
import { orderTypes } from "../types/OrderTypes";

export const OrderTypeDropdown = () => {
    const [selectedOrderTypes, setSelectedOrderTypes] = useState(orderTypes);
    const [showOrderTypes, setShowOrderTypes] = useState(false);
    const [orderType, setOrderType] = useState('Limit');
    
    const handleOrderTypeSelect = (selectedType: any) => {
        const updated = selectedOrderTypes.map(type => ({
        ...type,
        selected: type.id === selectedType.id
        }));
        setSelectedOrderTypes(updated);
        setOrderType(selectedType.name);
        setShowOrderTypes(false);
    };
  return (
    <View style={styles.section}>
      <Text style={styles.label}>Order type</Text>
      <RNPickerSelect
        onValueChange={(value) => {
          const selectedType = orderTypes.find(t => t.id === value);
          if (selectedType) {
            handleOrderTypeSelect(selectedType);
          }
        }}
        items={orderTypes.map(type => ({
          label: type.name,
          value: type.id,
          key: type.id,
        }))}
        value={selectedOrderTypes.find(t => t.selected)?.id}
        style={{
          inputIOS: styles.dropdownInput,
          inputAndroid: styles.dropdownInput,
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => (
          <Ionicons name="caret-down-sharp" size={16} color="green" style={styles.dropdownArrow}/>
        )}
      />
    </View>
  );
};