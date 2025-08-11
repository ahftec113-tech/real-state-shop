import { View, Text } from 'react-native';
import React, { memo } from 'react';
import { HeaderComponent } from '../../Components/HeaderComp';
import { PakFlag } from '../../Assets';
import DynamicTopBarNavigator from '../../Navigation/TopBarTabsNavigation';
import favScreen from './favScreen';
import savedSearchScreen from './savedSearchSCreen';
import { Colors } from '../../Theme/Variables';
import { wp } from '../../Hooks/useResponsive';
import useFavorateScreen from './useFavorateScreen';

const FavorateScreen = ({ navigation, route }) => {
  const myScreens = [
    { name: 'Favorites', component: favScreen },
    { name: 'Saved Searches', component: savedSearchScreen },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent headerTitle={'Favorite and Saved'} isLeftIcon />
      <DynamicTopBarNavigator
        screens={myScreens}
        navigatorProps={{
          initialRouteName: 'Favorites',
          screenOptions: {
            tabBarIndicatorStyle: {
              backgroundColor: Colors.primaryColor,
              alignItem: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            },
          },
        }}
      />
    </View>
  );
};

export default memo(FavorateScreen);
