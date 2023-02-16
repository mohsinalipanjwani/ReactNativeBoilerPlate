import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';
import * as routeName from './routeNames';

const Stack = createNativeStackNavigator();

function AuthRouter() {
  return (
    <Stack.Navigator
      initialRouteName={routeName.LOGIN}
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        animation: 'fade',
        orientation: 'portrait_up',
      }}
    >
      {Object.keys(routes).map((routeKey) => (
        <Stack.Screen
          key={routeKey}
          name={routeKey}
          // @ts-ignore
          component={routes[routeKey].screen}
          // @ts-ignore
          options={routes[routeKey]?.options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AuthRouter;
