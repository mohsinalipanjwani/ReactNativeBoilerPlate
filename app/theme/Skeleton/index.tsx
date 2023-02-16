/**
 *
 * Loader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import useLoaderAnimationValue from './useLoaderAnimation';

const { interpolateNode, Extrapolate } = Animated;

interface LoaderProps {
  loaderStyle: object;
  numberOfItems: number;
  direction?: 'row' | 'column';
}

const Skeleton: React.FC<LoaderProps> = function ({
  loaderStyle = {},
  numberOfItems = 3,
  direction = 'row',
}) {
  const progress: Animated.Value<number> = useLoaderAnimationValue();
  const length = numberOfItems;
  const delta = 1 / length;

  return (
    <View style={{ flexDirection: direction }}>
      {Array.from(Array(numberOfItems), (_a, i) => {
        const start = i * delta;
        const end = start + delta;
        const opacity = interpolateNode(progress, {
          inputRange: [start, end],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP,
        });
        return (
          <Animated.View
            key={`s${i}`}
            style={[{ ...loaderStyle }, { opacity }]}
          />
        );
      })}
    </View>
  );
};

export default Skeleton;
