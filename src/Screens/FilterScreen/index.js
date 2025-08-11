import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import { HeaderComponent } from '../../Components/HeaderComp';
import { TextComponent } from '../../Components/TextComponent';
import { hp, wp } from '../../Hooks/useResponsive';
import {
  arrDown,
  arrowRight,
  arrRight,
  bathRoomIcon,
  bedIcon,
  home,
  location,
  mapIcon,
  priceTagIcon,
  SqFitIcon,
} from '../../Assets';
import { MultiSelectButton } from '../../Components/MultiSelectButton';
import DividerLine from '../../Components/DividerLine';
import DynamicTopBarNavigator from '../../Navigation/TopBarTabsNavigation';
import { Colors } from '../../Theme/Variables';
import RangeSlider from 'react-native-sticky-range-slider';
import { bathrooms, bedrooms, sizes } from '../../Utils/localDB';
import ThemeButton from '../../Components/ThemeButton';
import { styles } from './styles';

const FilterScreen = () => {
  const MIN_AGE = 18;
  const MAX_AGE = 60;

  const Thumb = type => <View style={styles.thumb} />;
  const Rail = () => <View style={styles.rail} />;
  const RailSelected = () => <View style={styles.railSelected} />;

  const [min, setMin] = useState(MIN_AGE);
  const [max, setMax] = useState(MAX_AGE);
  const [disableRange, setDisableRange] = useState(false);

  const handleValueChange = useCallback((newLow, newHigh) => {
    setMin(newLow);
    setMax(newHigh);
  }, []);

  const handleToggle = () => {
    setDisableRange(prev => !prev);
  };

  const TopHomeComp = () => {
    return (
      <View style={styles.topHomeCompContainer}>
        <MultiSelectButton
          items={[
            { id: 'Rent', name: 'Rent', isTopImg: home },
            { id: 'Buy', name: 'Buy' },
          ]}
          isPrimaryColorStyle={true}
          isDisable
        />
      </View>
    );
  };
  const TopPlotsComp = () => {
    return <TextComponent text={'sdklnn'} />;
  };
  const TopCommercialComp = () => {
    return <TextComponent text={'sdklnn'} />;
  };

  const myScreens = [
    { name: 'Homes', component: TopHomeComp },
    { name: 'Plots', component: TopPlotsComp },
    { name: 'Commercial', component: TopCommercialComp },
  ];

  return (
    <View style={styles.container}>
      <HeaderComponent
        headerTitle={'Filters'}
        isBack
        // style={{ backgroundColor: 'red' }}
        rightText={'Reset'}
        rightTextStyle={{ color: 'red' }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.locationRow}>
          <Image
            source={location}
            resizeMode="contain"
            tintColor={'black'}
            style={styles.locationIcon}
          />
          <TextComponent text={'I Want to'} size={'1.5'} family={'bold'} />
          <View style={styles.multiSelectContainer}>
            <MultiSelectButton
              items={[
                { id: 'Rent', label: 'Rent' },
                { id: 'Buy', label: 'Buy' },
              ]}
              isPrimaryColorStyle={true}
              isDisable
            />
          </View>
        </View>
        <DividerLine />
        <View style={styles.cityRow}>
          <Image
            source={location}
            resizeMode="contain"
            tintColor={'black'}
            style={styles.locationIcon}
          />
          <View style={styles.cityTextContainer}>
            <TextComponent text={'City'} family={'400'} size={'1.8'} />
            <TextComponent text={'karachi'} fade size={'1.5'} />
          </View>
          <Image
            source={arrowRight}
            resizeMode="contain"
            tintColor={'black'}
            style={styles.arrowIcon}
          />
        </View>
        <DividerLine />
        <View style={styles.selectLocationContainer}>
          <View style={styles.selectLocationRow}>
            <Image
              source={mapIcon}
              resizeMode="contain"
              tintColor={'black'}
              style={styles.locationIcon}
            />
            <TextComponent
              text={'Select Location'}
              family={'400'}
              size={'1.8'}
            />
          </View>
          <View style={styles.mapContainer}>
            <DynamicTopBarNavigator
              screens={myScreens}
              navigatorProps={{
                initialRouteName: 'Homes',
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
        </View>
        <DividerLine />
        <View style={styles.priceRangeRow}>
          <View style={styles.priceRangeLeft}>
            <Image
              source={priceTagIcon}
              resizeMode="contain"
              style={styles.priceIcon}
            />
            <TextComponent text={'Price range'} family={'400'} size={'1.8'} />
          </View>
          <View style={styles.priceRangeRight}>
            <TextComponent text={'PKR'} family={'400'} size={'1.8'} />
            <Image
              source={arrDown}
              resizeMode="contain"
              style={styles.arrowIcon}
            />
          </View>
        </View>
        <View style={styles.priceInputRow}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="0"
              style={styles.input}
              placeholderTextColor={'gray'}
            />
          </View>
          <TextComponent text={'TO'} family={'400'} size={'1.5'} />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Any"
              style={styles.input}
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <RangeSlider
          style={styles.slider}
          min={MIN_AGE}
          max={MAX_AGE}
          step={1}
          minRange={5}
          low={min}
          high={max}
          onValueChanged={handleValueChange}
          renderLowValue={value => <Text style={styles.valueText}></Text>}
          renderHighValue={value => <Text style={styles.valueText}></Text>}
          renderThumb={Thumb}
          renderRail={Rail}
          renderRailSelected={RailSelected}
          disableRange={disableRange}
        />
        <DividerLine />
        <View style={styles.areaRangeRow}>
          <View style={styles.areaRangeLeft}>
            <Image
              source={SqFitIcon}
              resizeMode="contain"
              style={styles.priceIcon}
            />
            <TextComponent text={'Area range'} family={'400'} size={'1.8'} />
          </View>
          <View style={styles.areaRangeRight}>
            <TextComponent text={'Sq. Yd'} family={'400'} size={'1.8'} />
            <Image
              source={arrDown}
              resizeMode="contain"
              style={styles.arrowIcon}
            />
          </View>
        </View>
        <View style={styles.areaInputRow}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="0"
              style={styles.input}
              placeholderTextColor={'gray'}
            />
          </View>
          <TextComponent text={'TO'} family={'400'} size={'1.5'} />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Any"
              style={styles.input}
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <RangeSlider
          style={styles.slider}
          min={MIN_AGE}
          max={MAX_AGE}
          step={1}
          minRange={5}
          low={min}
          high={max}
          onValueChanged={handleValueChange}
          renderLowValue={value => <Text style={styles.valueText}></Text>}
          renderHighValue={value => <Text style={styles.valueText}></Text>}
          renderThumb={Thumb}
          renderRail={Rail}
          renderRailSelected={RailSelected}
          disableRange={disableRange}
        />
        <View style={styles.sizesContainer}>
          <MultiSelectButton
            items={sizes}
            isPrimaryColorStyle={true}
            isDisable
          />
        </View>
        <DividerLine />
        <View style={styles.bedroomsRow}>
          <Image
            source={bedIcon}
            resizeMode="contain"
            style={styles.priceIcon}
          />
          <TextComponent text={'Bedrooms'} family={'400'} size={'1.8'} />
        </View>
        <View style={styles.bedroomsButtonContainer}>
          <MultiSelectButton
            items={bedrooms}
            isPrimaryColorStyle={true}
            isDisable
          />
        </View>
        <DividerLine />
        <View style={styles.bathroomsRow}>
          <Image
            source={bathRoomIcon}
            resizeMode="contain"
            style={styles.priceIcon}
          />
          <TextComponent text={'Bathrooms'} family={'400'} size={'1.8'} />
        </View>
        <View style={styles.bathroomsButtonContainer}>
          <MultiSelectButton
            items={bathrooms}
            isPrimaryColorStyle={true}
            isDisable
          />
        </View>
        <ThemeButton title={'Show Ads'} isTheme style={styles.showAdsButton} />
      </ScrollView>
    </View>
  );
};

export default memo(FilterScreen);
