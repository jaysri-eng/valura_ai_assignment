import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { useState } from "react";

export const TpslSection = () => {
    const [showTPSL, setShowTPSL] = useState(false);
    const [tpslEnabled, setTpslEnabled] = useState(false);
    const [takeProfit, setTakeProfit] = useState('0');
    const [stopLoss, setStopLoss] = useState('0');
    return (
       <TouchableOpacity style={styles.tpslToggle}
                   onPress={() => setTpslEnabled(!tpslEnabled)}>
         <View style={styles.tpslSection}>
    <View style={styles.tpslHeader}>
      <View style={styles.tpslHeaderLeft}>
        <View style={[styles.checkbox, tpslEnabled && styles.checkboxChecked]}>
          {tpslEnabled && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.tpslHeaderText}>TP/SL</Text>
      </View>

      <View style={styles.tpslHeaderRight}>
        <Text style={styles.tpslHeaderText}>TIF: GTC</Text>
        <Ionicons name="chevron-down-outline" size={16} color="#333" style={{ marginLeft: 4 }} />
      </View>
    </View>

    {tpslEnabled && (
      <View style={styles.tpslContent}>
        <View style={styles.tpslRow}>
          <View style={styles.tpslItem}>
            <Text style={styles.tpslLabel}>Take Profit</Text>
            <TouchableOpacity style={styles.tpslInput}>
              <Text style={styles.tpslInputText}>{takeProfit}%</Text>
              <Text style={styles.tpslInputLabel}>Mark</Text>
              <Ionicons name="chevron-down-outline" size={14} color="#333" style={{ marginLeft: 2 }} />
            </TouchableOpacity>
          </View>

          <View style={styles.tpslItem}>
            <Text style={styles.tpslLabel}>Stop Loss</Text>
            <TouchableOpacity style={styles.tpslInput}>
              <Text style={styles.tpslInputText}>{stopLoss}%</Text>
              <Text style={styles.tpslInputLabel}>Mark</Text>
              <Ionicons name="chevron-down-outline" size={14} color="#333" style={{ marginLeft: 2 }} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.advancedButton}>
          <Text style={styles.advancedButtonText}>Advanced</Text>
          <Ionicons name="swap-horizontal-outline" size={16} color="green" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
      </View>
    )}
  </View>
       </TouchableOpacity>
    )
};
