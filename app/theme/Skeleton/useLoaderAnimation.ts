/**
 *
 * useLoaderAnimationValue
 *
 */
import Animated, { EasingNode } from 'react-native-reanimated';

const {
  Clock,
  Value,
  useCode,
  set,
  block,
  cond,
  startClock,
  clockRunning,
  not,
  eq,
  timing,
} = Animated;
const runTiming = (clock: Animated.Clock): Animated.Node<number> => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };
  const config = {
    toValue: new Value(1),
    duration: 1000,
    easing: EasingNode.inOut(EasingNode.ease),
  };
  return block([
    cond(
      not(clockRunning(clock)),
      startClock(clock),
      timing(clock, state, config),
    ),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, cond(eq(state.position, 1), 0, 1)),
    ]),
    state.position,
  ]);
};

const useLoaderAnimationValue = () => {
  const progress = new Value(0);
  const clock = new Clock();

  useCode(() => block([set(progress, runTiming(clock))]), [progress]);
  return progress;
};

export default useLoaderAnimationValue;
