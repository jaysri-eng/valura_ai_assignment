import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../constants/styles';
import { QtyDropdown } from './QtyDropdown';

export const PriceSection = () => {
  const [price, setPrice] = useState('78.01');
  const [size, setSize] = useState('0');

  const increasePrice = () => {
    const newPrice = (parseFloat(price) || 0) + 1;
    setPrice(newPrice.toString());
  };

  const decreasePrice = () => {
    const newPrice = Math.max((parseFloat(price) || 0) - 1, 0);
    setPrice(newPrice.toString());
  };

  return (
    <View style={styles.priceSection}>
      <View style={styles.priceContainer}>
        <Text style={styles.label}>Price</Text>
        <View style={styles.priceInputContainer}>
          <TouchableOpacity style={styles.priceButton} onPress={decreasePrice}>
            <Ionicons name="remove-circle-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TextInput
            style={styles.priceInput}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.priceButton} onPress={increasePrice}>
            <Ionicons name="add-circle-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sizeContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.label}>Size</Text>
          <Text style={styles.amountLabel}>Amount: 0.00</Text>
        </View>
        <View style={styles.sizeInputContainer}>
          <TextInput
            style={styles.sizeInput}
            value={size + "%"}
            onChangeText={(text) => setSize(text.replace("%", ""))}
          />
          {/* <View style={styles.qtyContainer}>
            <Text style={styles.qtyText}>Qty</Text>
            <Text style={styles.qtyArrow}>⌄</Text>
          </View> */}
          <QtyDropdown/>
        </View>
      </View>
    </View>
  );
};
