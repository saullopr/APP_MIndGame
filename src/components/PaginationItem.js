import { Box } from 'native-base';
import * as React from 'react';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

export const colors = [
  "#397DC9",
  "#397DC9"
]

export const PaginationItem: React.FC<{
    index: number;
    backgroundColor: string;
    length: number;
    animValue: Animated.SharedValue<number>;
    isRotate?: boolean;
  }> = (props) => {
    const { animValue, index, length, backgroundColor, isRotate } = props;
    const width = 15;
  
    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-width, 0, width];
  
      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-width, 0, width];
      }
  
      return {
        transform: [
          {
            translateX: interpolate(
              animValue?.value,
              inputRange,
              outputRange,
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }, [animValue, index, length]);
    return (
      <Box
        style={{
          backgroundColor: "white",
          width,
          height: width,
          borderRadius: 50,
          overflow: "hidden",
          transform: [
            {
              rotateZ: isRotate ? "90deg" : "0deg",
            },
          ],
        }}
      >
        <Animated.View
          style={[
            {
              borderRadius: 50,
              backgroundColor,
              flex: 1,
            },
            animStyle,
          ]}
        />
      </Box>
    );
  };