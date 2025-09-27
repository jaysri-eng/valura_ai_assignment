import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Image, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useStockDetails } from "../hooks/useStockDetails"; // adjust path

interface Props {
  ticker: string;
}

export const StockMoreButton = ({ ticker }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error } = useStockDetails(ticker);

  return (
    <>
      <TouchableOpacity style={styles.moreButton} onPress={() => setShowModal(true)}>
        <Ionicons name="ellipsis-horizontal-sharp" size={20} color="#333" />
      </TouchableOpacity>

      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Stock Details</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close-outline" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            {loading && <ActivityIndicator size="large" color="#0a0" style={{ marginTop: 20 }} />}
            {error && <Text style={{ color: "red", marginTop: 20 }}>{error}</Text>}
            {data && (
              <ScrollView style={{ marginTop: 10 }}>
                <View style={{ alignItems: "center", marginBottom: 10 }}>
                  <Image
                    source={{ uri: data.results.branding.logo_url }}
                    style={{ width: 80, height: 80 }}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.detailText}><Text style={styles.bold}>Ticker:</Text> {data.results.ticker}</Text>
                <Text style={styles.detailText}><Text style={styles.bold}>Name:</Text> {data.results.name}</Text>
                <Text style={styles.detailText}><Text style={styles.bold}>Market:</Text> {data.results.market}</Text>
                <Text style={styles.detailText}><Text style={styles.bold}>Primary Exchange:</Text> {data.results.primary_exchange}</Text>
                <Text style={styles.detailText}><Text style={styles.bold}>Type:</Text> {data.results.type}</Text>
                <Text style={styles.detailText}><Text style={styles.bold}>Currency:</Text> {data.results.currency_name}</Text>
                <Text style={styles.detailText}><Text style={styles.bold}>Active:</Text> {data.results.active ? "Yes" : "No"}</Text>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  moreButton: {
    padding: 5,
    width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailText: {
    fontSize: 14,
    marginVertical: 2,
  },
  bold: {
    fontWeight: "600",
  },
});
