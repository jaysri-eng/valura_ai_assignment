import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "../constants/styles"
import { useState } from "react";
import { AddFundsModal } from "./AddFundsModal";

export const BottomSection = () => {
    const balance = 1938.98;
    const maxBuy = 1938.98;
    const [showAddFunds, setShowAddFunds] = useState(false);
    const openAddFundsModal = () => setShowAddFunds(true);
    const closeAddFundsModal = () => setShowAddFunds(false);
    
    return (
        <View style={styles.bottomSection}>
          <View style={styles.balanceInfo}>
            <View style={styles.balanceRow}>
              {/* Left side: Balance + value */}
              <Text style={styles.balanceLabel}>Balance: </Text>
              <Text style={styles.balanceValue}>AED {balance.toFixed(2)}</Text>

              {/* Right side: Add Funds */}
              <TouchableOpacity onPress={openAddFundsModal}>
                <Text style={styles.addFunds}>Add Funds</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceLabel}>Max Buy:</Text>
              <Text style={styles.balanceValue}>AED {maxBuy.toFixed(2)}</Text>
            </View>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceLabel}>Est. Fee</Text>
              <Text style={styles.feeValue}>-- AED</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.previewButton}>
            <Text style={styles.previewButtonText}>Preview Buy</Text>
          </TouchableOpacity>
          {/* Pass state and handler to modal */}
        <AddFundsModal visible={showAddFunds} onClose={closeAddFundsModal} />
        </View>
    )
}