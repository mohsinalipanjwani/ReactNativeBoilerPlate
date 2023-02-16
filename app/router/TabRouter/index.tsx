import omit from 'lodash/omit';

import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import routes from './routes';
import routeName from './routeNames';

import TabBar from 'components/TabBar';

const Tab = createBottomTabNavigator();

function TabBarFunc(props: BottomTabBarProps) {
  return <TabBar {...props} />;
}

function HomeScreenTabRouter() {
  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName={routeName.HOME}
      tabBar={TabBarFunc}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.keys(routes).map((routeKey) => (
        <Tab.Screen
          key={routeKey}
          name={routeKey}
          // @ts-ignore
          component={routes[routeKey].screen}
          // @ts-ignore
          initialParams={omit(routes[routeKey], ['screen'])}
        />
      ))}
    </Tab.Navigator>
  );
}

export default HomeScreenTabRouter;
