/**
 *
 * Animation
 *
 */
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import AnimatedLottieView, {
  AnimatedLottieViewProps,
} from 'lottie-react-native';
import Animations from 'animations';

export interface AnimationProps
  extends Omit<AnimatedLottieViewProps, 'source' | 'progress'> {
  title: keyof typeof Animations;
  progress?: number;
}

const Animation: React.FC<AnimationProps> = function ({
  title,
  progress = 1,
  ...props
}) {
  const animatedProgress = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animatedProgress, progress]);

  return (
    <AnimatedLottieView
      {...props}
      source={Animations[title]}
      progress={animatedProgress}
    />
  );
};

export default Animation;
