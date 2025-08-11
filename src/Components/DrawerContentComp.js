import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Hooks/useResponsive';
import { Colors } from '../Theme/Variables';
import {
  about,
  aboutGray,
  arrRight,
  buildingGray,
  callGray,
  discoverGray,
  draftGray,
  heartGray,
  homeGray,
  homeIcon,
  logout,
  logOutGray,
  myPropertyGray,
  phone,
  plusBlue,
  plusGray,
  ProjectGray,
  setting,
  settingGray,
  termGray,
  terms,
} from '../Assets';
import { TextComponent } from './TextComponent';
import { Touchable } from './Touchable';

const DrawerContentComp = ({ closeDrawer }) => {
  const [selectedState, setSelectedState] = useState('home');
  const drawerItems = [
    { id: 1, key: 'home', name: 'Home', icon: homeGray },
    { id: 2, key: 'addProperty', name: 'Add Property', icon: plusGray },
    {
      id: 3,
      key: 'Searchproperty',
      name: 'Search Property',
      icon: discoverGray,
    },
    { id: 4, key: 'newProject', name: 'New Projects', icon: buildingGray },
    { id: 5, key: 'favorite', name: 'Favorites', icon: heartGray },
  ];

  const drawerItemsProperty = [
    { id: 1, key: 'myProperties', name: 'My Properties', icon: myPropertyGray },
    { id: 2, key: 'draft', name: 'Drafts', icon: draftGray },
  ];

  const drawerItemsControls = [
    { id: 1, key: 'setting', name: 'Setting', icon: settingGray },
    { id: 2, key: 'aboutUs', name: 'About Us', icon: aboutGray },
    { id: 3, key: 'contactUs', name: 'Contact Us', icon: callGray },
    { id: 4, key: 'term', name: 'Terms & Privacy policy', icon: termGray },
    { id: 5, key: 'logout', name: 'Logout', icon: logOutGray },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={homeIcon}
        resizeMode="contain"
        style={styles.headerImage}
      />
      <TextComponent
        text={'Bilal Zahid'}
        size={'2.5'}
        family={'bold'}
        styles={{
          marginLeft: wp('4'),
        }}
      />
      <View style={styles.profileRow}>
        <TextComponent
          text={'View Profile'}
          isThemeColor
          size={'1.5'}
          family={'bold'}
        />
        <Image
          source={arrRight}
          resizeMode="contain"
          style={styles.profileArrow}
          tintColor={Colors.primaryColor}
        />
      </View>

      {drawerItems.map(res => (
        <Touchable
          key={res.id}
          style={styles.menuItem(Boolean(res?.key == selectedState))}
          onPress={() => setSelectedState(res?.key)}
        >
          <Image
            source={res.icon}
            resizeMode="contain"
            style={styles.menuIcon}
            tintColor={
              Boolean(res?.key == selectedState) ? Colors.white : 'gray'
            }
          />
          <TextComponent
            text={res?.name}
            size={'1.5'}
            isWhite={Boolean(res?.key == selectedState)}
          />
        </Touchable>
      ))}

      <TextComponent
        text={'PROPERTY & QUOTA'}
        size={'1.5'}
        styles={styles.sectionTitle}
      />

      {drawerItemsProperty.map(res => (
        <Touchable
          key={res.id}
          style={styles.menuItem(Boolean(res?.key == selectedState))}
          onPress={() => setSelectedState(res?.key)}
        >
          <Image
            source={res.icon}
            resizeMode="contain"
            style={styles.menuIcon}
            tintColor={
              Boolean(res?.key == selectedState) ? Colors.white : 'gray'
            }
          />
          <TextComponent
            text={res?.name}
            size={'1.5'}
            isWhite={Boolean(res?.key == selectedState)}
          />
        </Touchable>
      ))}

      <TextComponent
        text={'CONTROLS'}
        size={'1.5'}
        styles={styles.sectionTitle}
      />

      {drawerItemsControls.map(res => (
        <Touchable
          key={res.id}
          style={styles.menuItem(Boolean(res?.key == selectedState))}
          onPress={() => setSelectedState(res?.key)}
        >
          <Image
            source={res.icon}
            resizeMode="contain"
            style={styles.menuIcon}
            tintColor={
              Boolean(res?.key == selectedState) ? Colors.white : 'gray'
            }
          />
          <TextComponent
            text={res?.name}
            size={'1.5'}
            isWhite={Boolean(res?.key == selectedState)}
          />
        </Touchable>
      ))}
    </ScrollView>
  );
};

export default DrawerContentComp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: hp('10'),
  },
  headerImage: {
    width: wp('40'),
    height: hp('10'),
    marginLeft: wp('4'),
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1'),
    marginLeft: wp('4'),
  },
  profileArrow: {
    width: wp('4'),
    height: hp(4),
    marginLeft: wp('1'),
  },
  menuItem: isSelected => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isSelected ? Colors.primaryColor : 'white',
    width: wp('70'),
    paddingVertical: hp('1'),
    paddingHorizontal: wp('4'),
  }),
  menuIcon: {
    width: wp('4'),
    height: hp('4'),
    marginRight: wp('5'),
  },
  sectionTitle: {
    marginVertical: hp('2'),
    marginLeft: wp('4'),
  },
});
