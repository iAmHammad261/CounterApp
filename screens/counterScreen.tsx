import { Pressable, StyleSheet, Text, View } from "react-native";
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import useCounter from "../zustand/counterSlice.js";
import stylesForCounterScreen from "../style/stylesForCounterScreen.js";
import TextGradientComponent from "../components/TextGradientComponent.js";
import ResetIcon from "../components/resetIcon.js";

export default function counterScreen() {
  // subscribing to the value of counter in  store :
  const valueOfCounter = useCounter((state) => state.counterValue);

  // accessing the actions for updating the counter value:
  const increaseCounterValue = useCounter(
    (state) => state.increaseCounterValue
  );
  const decreaseCounterValue = useCounter(
    (state) => state.decreaseCounterValue
  );
  const resetCounterValue = useCounter((state) => state.resetCounterValue);

  // using useState for the time:
  const [timerForIncrementPressable, setTimerForIncrementPressable] = useState<
    number | null
  >(null);
  const [timerForDecrementPressable, setTimerForDecrementPressable] = useState<
    number | null
  >(null);

  const onLongPressOfIncrement = () => {
    setTimerForDecrementPressable(null);
    setTimerForIncrementPressable(null);
    increaseCounterValue();
    const timerID = setTimeout(
      onLongPressOfIncrement,
      150
    ) as unknown as number;
    console.log("timerID set for increment: " + timerID);
    setTimerForIncrementPressable(timerID);
  };

  const onPressInOfPressableOfIncrement = () => {
    increaseCounterValue();
  };

  const onPressOutOfPressableOfIncrement = () => {
    console.log(
      "timer for increment to be cleared",
      timerForIncrementPressable
    );
    if (timerForIncrementPressable !== null) {
      clearTimeout(timerForIncrementPressable);
      setTimerForIncrementPressable(null);
    }

    if (timerForDecrementPressable !== null) {
      clearTimeout(timerForDecrementPressable);
      setTimerForDecrementPressable(null);
    }
  };

  const onLongPressOfDecrement = () => {
    setTimerForIncrementPressable(null);
    setTimerForDecrementPressable(null);
    decreaseCounterValue();
    const timerID = setTimeout(
      onLongPressOfDecrement,
      150
    ) as unknown as number;
    console.log("timerID set for the decrement", timerID);
    setTimerForDecrementPressable(timerID);
  };

  const onPressInOfPressableOfDecrement = () => {
    decreaseCounterValue();
  };

  const onPressOutOfPressableOfDecrement = () => {
    console.log(
      "timerID for the decrement to be cleared",
      timerForDecrementPressable
    );
    if (timerForDecrementPressable !== null) {
      clearTimeout(timerForDecrementPressable);
      setTimerForDecrementPressable(null);
    }

    if (timerForIncrementPressable !== null) {
      clearTimeout(timerForIncrementPressable);
      setTimerForDecrementPressable(null);
    }
  };

  return (
    <View style={stylesForCounterScreen.counterScreenBackground}>
      <StatusBar backgroundColor={"#222222"} style="light" />
      <TextGradientComponent
        text={valueOfCounter}
        gradientColors={["#66bb6a", "#43a047", "#1b5e20"]}
      />
      <View style={stylesForCounterScreen.viewForPressable}>
        <Pressable
          style={stylesForCounterScreen.pressableForIncrement}
          onPressIn={onPressInOfPressableOfIncrement}
          onLongPress={onLongPressOfIncrement}
          onPressOut={onPressOutOfPressableOfIncrement}
        >
          <Text style={stylesForCounterScreen.textForPressable}>Increment</Text>
        </Pressable>
        <Pressable
          style={stylesForCounterScreen.pressableOfReset}
          onPress={resetCounterValue}
        >
          <ResetIcon />
        </Pressable>
        <Pressable
          style={stylesForCounterScreen.pressableForIncrement}
          onPressIn={onPressInOfPressableOfDecrement}
          onLongPress={onLongPressOfDecrement}
          onPressOut={onPressOutOfPressableOfDecrement}
        >
          <Text style={stylesForCounterScreen.textForPressable}>Decrement</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
