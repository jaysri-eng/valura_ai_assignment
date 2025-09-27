import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import {colors} from "../constants/colors"; // adjust path

export default function CustomSlider() {
  const [sliderValue, setSliderValue] = useState(0);

  const steps = [0, 25, 50, 75, 100];

  const getNearestStep = (value: number) => {
    const step = 25;
    return Math.round(value / step) * step;
  };

  const handleValueChange = (value: number) => {
    const snapped = getNearestStep(value);
    setSliderValue(snapped);
  };

  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={sliderValue}
        onSlidingComplete={handleValueChange}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.lightGray}
        thumbTintColor={colors.primary}
      />

      {/* Circles for steps */}
      <View style={styles.marksContainer}>
        {steps.map((val) => (
          <View
            key={val}
            style={[
              styles.mark,
              sliderValue === val && { backgroundColor: colors.primary },
            ]}
          />
        ))}
      </View>

      {/* Labels */}
      <View style={styles.sliderLabels}>
        {steps.map((val) => (
          <Text
            key={val}
            style={[
              styles.sliderLabel,
              sliderValue === val && { color: colors.primary, fontWeight: "bold" },
            ]}
          >
            %{val}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: "100%",
    paddingHorizontal: 5,
  },
  slider: {
    width: "100%",
    height: 40, 
  },
  marksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    left: 5,
    right: 5,
    top: 20, 
    height: 0, 
    alignItems: "center",
  },
  mark: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  sliderLabel: {
    fontSize: 12,
    color: "#777",
  },
});

