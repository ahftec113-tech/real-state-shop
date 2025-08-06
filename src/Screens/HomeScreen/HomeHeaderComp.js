import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import { MultiSelectButton } from '../../Components/MultiSelectButton';
import { TextComponent } from '../../Components/TextComponent';
import { hp, wp } from '../../Hooks/useResponsive';
import { Colors } from '../../Theme/Variables';
import {
  arrDown,
  arrowGreen,
  drawerIcon,
  homeBg,
  homeIcon,
  PakFlag,
  searchIcon,
} from '../../Assets';

const sizes = [
  { id: 1, sqYd: 120 },
  { id: 2, sqYd: 250 },
  { id: 3, sqYd: 500 },
];

const HomeHeaderComp = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ImageBackground source={homeBg} resizeMode="contain" style={styles.bg}>
      <View style={styles.headerBar}>
        <Image
          source={drawerIcon}
          resizeMode="contain"
          style={styles.iconSmall}
        />
        <Image source={homeIcon} resizeMode="contain" style={styles.homeIcon} />
        <Image source={PakFlag} resizeMode="contain" style={styles.iconSmall} />
      </View>

      <View style={styles.tabRow}>
        <MultiSelectButton
          items={[
            { id: 1, label: 'Rent' },
            { id: 2, label: 'Buy' },
          ]}
          isPrimaryColorStyle={true}
          selectedAlter={{ id: 1 }}
        />
      </View>

      <View style={styles.searchBar}>
        <Image
          source={searchIcon}
          tintColor={'gray'}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput style={styles.input} />
        <TextComponent text={'|'} family={'bold'} />
        <TextComponent text={'Karachi'} />
        <Image
          source={arrowGreen}
          resizeMode="contain"
          style={styles.searchIcon}
        />
      </View>

      <View style={styles.cardBox}>
        <View style={styles.propertyTabs}>
          <MultiSelectButton
            items={[
              { id: 1, label: 'Home' },
              { id: 2, label: 'Plot' },
              { id: 3, label: 'Commerical' },
              { id: 4, label: 'Office' },
            ]}
            isGrayBg={true}
            textStyle={{ color: Colors.primaryColor }}
            selectedAlter={{ id: 1 }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
          style={{ alignSelf: 'center' }}
        >
          {sizes.map(item => {
            const isSelected = selectedId === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.card,
                  isSelected ? styles.selectedCard : styles.unselectedCard,
                ]}
                onPress={() => setSelectedId(item.id)}
              >
                <TextComponent
                  text={`${item.sqYd} Sq. Yd`}
                  styles={styles.text}
                  isWhite={isSelected}
                  isThemeColor={!isSelected}
                  size={1.5}
                  family={'bold'}
                />
                <TextComponent
                  text="Houses"
                  styles={styles.subText}
                  isWhite={isSelected}
                  isThemeColor={!isSelected}
                  size={1.2}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: wp('100'),
    height: hp('50'),
    top: hp('-7'),
  },
  headerBar: {
    width: wp('95'),
    flexDirection: 'row',
    paddingVertical: hp('1'),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp('10'),
    paddingHorizontal: wp('2'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconSmall: {
    width: wp('5'),
    height: hp('1.5'),
  },
  homeIcon: {
    width: wp('30'),
    height: hp('5'),
  },
  tabRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('1.5'),
  },
  searchBar: {
    width: wp('90'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2'),
    borderRadius: 15,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: Colors.lightInnerColor,
    marginBottom: hp('1.5'),
  },
  searchIcon: {
    width: wp('4'),
    height: hp('2'),
    marginRight: wp('1'),
  },
  input: {
    width: wp('40'),
    color: 'black',
  },
  cardBox: {
    width: wp('90'),
    borderRadius: 20,
    paddingVertical: hp('1'),
    alignSelf: 'center',
    backgroundColor: Colors.lightInnerColor,
  },
  propertyTabs: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('1'),
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: wp('2'),
    marginBottom: hp('1'),
  },
  card: {
    paddingVertical: hp('1'),
    paddingHorizontal: wp('4'),
    borderRadius: 10,
    marginHorizontal: wp('1'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  selectedCard: {
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
  },
  unselectedCard: {
    backgroundColor: Colors.white,
    borderColor: Colors.primaryColor,
  },
  text: {
    marginBottom: hp('0.5'),
  },
  subText: {},
});

export default HomeHeaderComp;
