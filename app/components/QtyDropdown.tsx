import { useState } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';

export const QtyDropdown = () => {
  const [qty, setQty] = useState("1");

  // you can make this dynamic later (e.g. 1–100)
  const qtyOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `${i + 1}`,
    value: `${i + 1}`,
  }));

  return (
    <View style={styles.qtyContainer}>
      <RNPickerSelect
        onValueChange={(value) => setQty(value)}
        items={qtyOptions}
        value={qty}
        style={{
          inputIOS: styles.qtyDropdown,
          inputAndroid: styles.qtyDropdown,
          iconContainer: {
            right: 0,
            top: 0,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => (
          <Ionicons name="chevron-down-outline" size={16} color="green" />
        )}
      />
    </View>
  );
};

