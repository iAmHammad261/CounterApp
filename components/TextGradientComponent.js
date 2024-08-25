import React from 'react';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';
import { View, StyleSheet, Dimensions } from 'react-native';

const GradientText = ({ text, gradientColors }) => {
  const { width } = Dimensions.get('window');
  
  return (
    <View style={styles.textContainer}>
      <Svg height="300" width={width}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            {gradientColors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </LinearGradient>
        </Defs>
        <SvgText
          x="50%"
          y="50%"
          fontSize={150} // Adjust as needed
          fontWeight="bold" // Adjust as needed
          textAnchor="middle"
          fill="url(#grad)"
          dy=".3em"
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 2
  },
});

export default GradientText;
