import * as React from 'react';
import { View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import StaticTabBar from './StaticTabBar';

import style from './style';

interface ITabBarProps extends BottomTabBarProps {
  selectedIndex?: number;
}

const TabBar = (props: ITabBarProps) => {
  const { state, navigation, descriptors } = props;

  const tabs = React.useMemo(
    () =>
      state.routes.map((el) => ({
        key: el.key,
        name: el.name,
        params: el?.params,
        routeParams: { ...descriptors?.[el?.key] },
      })),
    [state?.routes, descriptors],
  );

  return (
    <View style={style.wrapper}>
      <StaticTabBar
        // @ts-ignore
        tabs={tabs}
        selected={state.index}
        setSelected={(index) => navigation.navigate(tabs[index].name)}
      />
    </View>
  );
};

export default TabBar;
