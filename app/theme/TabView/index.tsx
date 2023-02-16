import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  TabView as ReactNativeTabView,
  SceneMap,
  TabBar,
} from 'react-native-tab-view';

import Text from 'theme/Text';
import style from './style';

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    renderLabel={({ route, focused }) => (
      <Text
        style={[style.renderLabel, focused ? style.renderLabelFocused : null]}
      >
        {route.title}
      </Text>
    )}
    indicatorStyle={style.indicatorStyle}
    style={style.tabBarStyle}
  />
);

const TabView = ({ renderScenes, renderRoutes }: any) => {
  const layout = useWindowDimensions();

  const renderScene = useMemo(() => SceneMap(renderScenes), [renderScenes]);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(renderRoutes);

  return (
    <ReactNativeTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default TabView;
