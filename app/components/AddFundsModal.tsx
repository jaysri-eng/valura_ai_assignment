import {
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { styles } from "../constants/styles";
import { useState } from "react";

interface AddFundsModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AddFundsModal: React.FC<AddFundsModalProps> = ({ visible, onClose }) => {
  const [fundsAmount, setFundsAmount] = useState("");
  const [autoFocusInput, setAutoFocusInput] = useState(false);
  const handleAddFundsSubmit = () => {
    console.log("Adding funds:", fundsAmount);
    onClose();
    setFundsAmount("");
  };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Overlay background */}
        <TouchableOpacity
          style={styles.keypadOverlay}
          activeOpacity={1}
          onPress={onClose}
        />

        {/* Bottom Sheet */}
        <View style={styles.keypadContainer}>
          <View style={styles.keypadHeader}>
            <Text style={styles.keypadTitle}>Add Funds</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.keypadClose}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.addFundsInputContainer}>
              <Text style={styles.addFundsLabel}>Amount (AED)</Text>
              <TextInput
                style={styles.addFundsInput}
                value={fundsAmount}
                onChangeText={setFundsAmount}
                placeholder="0.00"
                keyboardType="decimal-pad"
                returnKeyType="done"
                autoFocus={autoFocusInput}
                onSubmitEditing={handleAddFundsSubmit}
              />
            </View>

            <View style={styles.addFundsButtons}>
              <TouchableOpacity
                style={styles.addFundsCancelButton}
                onPress={onClose}
              >
                <Text style={styles.addFundsCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addFundsConfirmButton}
                onPress={handleAddFundsSubmit}
              >
                <Text style={styles.addFundsConfirmText}>Add Funds</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
