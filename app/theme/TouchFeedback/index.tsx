import React from 'react';
import {
  Platform,
  Animated,
  Pressable,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const AnimatedPressable =
  Platform.OS === 'android'
    ? Animated.createAnimatedComponent(Pressable)
    : Animated.createAnimatedComponent(TouchableOpacity);

const TouchFeedback: React.FC<TouchableOpacityProps> = (props) => (
  <AnimatedPressable
    android_ripple={{
      color: 'rgba(0, 0, 0, 0.1)',
    }}
    {...props}
  />
);

export default TouchFeedback;
