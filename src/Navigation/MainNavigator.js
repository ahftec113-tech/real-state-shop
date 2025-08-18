import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationService from '../Services/NavigationService';
import * as Screens from '../Screens/index';
import useReduxStore from '../Hooks/UseReduxStore';
import MybottomTabs from './BottomNavigation';
import Drawernavigation from './Drawernavigation';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const { getState } = useReduxStore();
  //   const { onboarding } = getState('onboarding');
  //   const { isLogin, userData } = getState('Auth');
  return (
    <NavigationContainer
      ref={ref => {
        NavigationService.setRef(ref);
        // const p = NavigationService.getCurrentRoute(ref.getCurrentRoute());
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}
      >
        {/* {!isLogin && (
          <>
            {!onboarding && (
              <Stack.Screen
                name="OnBoardScreen"
                component={Screens.OnBoardScreen}
              />
            )}
            <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
            <Stack.Screen
              name="RegisterScreen"
              component={Screens.RegisterScreen}
            />
         
          </>
        )} */}
        <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />

        <Stack.Screen
          name="RegisterScreen"
          component={Screens.RegisterScreen}
        />
        <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
        <Stack.Screen
          name="ProjectDetailScreen"
          component={Screens.ProjectDetailScreen}
        />
        <Stack.Screen
          name="ProjectListScreen"
          component={Screens.ProjectListScreen}
        />
        <Stack.Screen name="FilterScreen" component={Screens.FilterScreen} />
        <Stack.Screen
          name="ListViewScreen"
          component={Screens.ListViewScreen}
        />
        <Stack.Screen name="Drawernavigation" component={Drawernavigation} />
        <Stack.Screen
          name="ProjectsScreen"
          component={Screens.ProjectsScreen}
        />
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
