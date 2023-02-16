/**
 *
 * Loader
 *
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import animations from 'animations';

import Text from 'theme/Text';
import Dimensions from 'theme/Dimensions';

const LOADER_WIDTH = Dimensions.screenWidth / 2;

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: LOADER_WIDTH,
    height: LOADER_WIDTH,
  },
  loaderContainerStyle: {
    height: 80,
    alignItems: 'center',
  },
  loaderStyle: {
    height: 50,
    width: 50,
    padding: 0,
    margin: 0,
  },
});

interface LoaderProps {
  content?: React.ReactNode;
  loaderStyle?: any;
  containerStyle?: any;
  compact?: boolean;
}

export default function Loader(props: LoaderProps) {
  const onAnimationReady = (animation: { play: () => void }) => {
    if (!animation) {
      return;
    }
    animation.play();
  };
  return (
    <View
      style={[
        style.container,
        props.compact ? style.loaderContainerStyle : null,
      ]}
    >
      <LottieView
        style={[style.loader, props.compact ? style.loaderStyle : null]}
        source={animations.loader}
        ref={onAnimationReady as any}
        loop
      />
      <Text>{props.content}</Text>
    </View>
  );
}
