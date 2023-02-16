import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import Text from 'theme/Text';
import useColorPalette from 'hooks/useColorPalette';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

type RadioProps = {
  active: boolean;
  label?: string | React.ReactNode;
  onPress: (...args: any[]) => any;
};

const Radio: React.FC<RadioProps> = function (props) {
  const palette = useColorPalette();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.active ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [animation, props.active]);

  return (
    <TouchFeedback onPress={props.onPress} style={style.container}>
      <Animated.View
        style={[
          style.circle,
          {
            borderColor: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [palette?.textBlack, palette?.accent],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            style.innerCircle,
            {
              transform: [
                {
                  scale: animation,
                },
              ],
              opacity: animation,
            },
          ]}
        />
      </Animated.View>
      <Text
        testID="filterText"
        // style={[style.label, props.active && style.activeLabel]}
      >
        {props.label}
      </Text>
    </TouchFeedback>
  );
};

export default Radio;
