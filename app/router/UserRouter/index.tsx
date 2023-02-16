import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useUser } from 'providers/Auth';

import routes from './routes';
import * as routeName from './routeNames';
import { useUser } from 'providers/User';

const Stack = createNativeStackNavigator();
let initialRouteName: any;
function UserRouter() {
  const user = useUser();

  useEffect(() => {
    initialRouteName = user?.data?.name
      ? routeName.WELCOME
      : routeName.PROFILE_SETUP;
  }, [user?.data]);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        presentation: 'card',
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

export default UserRouter;
