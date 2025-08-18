import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, { memo, useState } from 'react';
import { hp, wp } from '../../Hooks/useResponsive';
import {
  arrDown,
  drawerIcon,
  homeBg,
  homeIcon,
  PakFlag,
  searchIcon,
} from '../../Assets';
import { TextComponent } from '../../Components/TextComponent';
import { MultiSelectButton } from '../../Components/MultiSelectButton';
import { Colors } from '../../Theme/Variables';
import { styles } from './styles';
import HomeHeaderComp from './HomeHeaderComp';
import PropertyCardComp from '../../Components/PropertyCardComp';
import { keyExtractor } from '../../Utils';
import useHoemScreen from './useHomeScreen';
import BtnModalComponent from '../../Components/BtnModalComp';
import { parsePriceRange } from '../../Services/GlobalFunctions';
const sizes = [
  { id: 1, sqYd: 120 },
  { id: 2, sqYd: 250 },
  { id: 3, sqYd: 500 },
];
const HomeScreen = ({ navigation }) => {
  const {
    homeData,
    modalState,
    setModalState,
    countries,
    fetchAreas,
    fetchCountries,
    selectedCity,
    arrySelector,
    selectedCountry,
    fetchCities,
    selectTag,
    setSelectedArea,
    selectedArea,
    setSelectedCity,
    setSelectedCountry,
    type,
    setType,
    dynamicNavigation,
    filterAttributesData,
    refetch,
  } = useHoemScreen(navigation);

  console.log(
    'lksdlksdbkldsnbklsdnklnskldvnlksdnvlkdsnlvknsdklvnkds',
    Object.entries(
      filterAttributesData?.data?.data?.data?.ProopertyType ?? {},
    ).map(([key, value]) => ({ id: value[0]?.parent_type_id, name: key })),
  );

  const renderItem = ({ item, index }) => {
    // const isEven = index % 2 === 0;
    // const isLastItem = index === yourData.length - 1;
    // const isSingleItem = yourData.length === 1;

    return (
      <PropertyCardComp
        item={item}
        key={index}
        image={item.image}
        logo={homeIcon}
        price={item.price}
        title={item.project_name}
        beds={item.total_bedrooms}
        baths={item.total_bathrooms}
        area={'1.2'}
        tag1={item.area_name}
        tag2={item.type_and_purpose}
      />
    );
  };
  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      showsVerticalScrollIndicator={false}
    >
      <HomeHeaderComp
        onOpenModal={() => {
          // setModalState(1);
        }}
        city={selectedCity}
        area={selectedArea}
        onCityPress={() => {
          setModalState(2);
        }}
        // filterAttributesData={
        //   Object.entries(
        //     filterAttributesData?.data?.data?.data?.ProopertyType ?? {},
        //   ).map(([key, value]) => ({ id: value?.parent_type_id, name: key })) ??
        //   []
        // }
        filterAttributesData={[
          { id: 1, parent_type_id: 1, type: 'Home', name: 'House' },
          {
            id: 2,
            parent_type_id: 1,
            type: 'Home',
            name: 'Flat',
          },
          {
            id: 9,
            parent_type_id: 2,
            type: 'Plots',
            name: 'Commercial Plot',
          },
        ]}
        onSqFitPress={e => {
          dynamicNavigation({ minArea: e, propertyTypeID: type });
        }}
        onSelectAttributeVal={e =>
          dynamicNavigation({ purposeId: e, propertyTypeID: type })
        }
        onAreaPress={() => {
          // setModalState(3);
          navigation.navigate('FilterScreen', {
            selectedType: type,
            selectedCountry,
            selectedCity,
            selectedArea,
          });
        }}
        type={type}
        setType={e => setType(e)}
      />
      <View style={styles.innerContainer}>
        <TextComponent text={'Search by Budget'} fade family={'300'} />
        <View style={styles.buttonWrap}>
          <MultiSelectButton
            items={[
              { id: 1, label: '20 - 35 L' },
              { id: 2, label: '20 - 35 L' },
              { id: 3, label: '35 - 50 L' },
              { id: 4, label: '50 L - 1 Cr' },
              { id: 5, label: '1.5 - 2.5 Cr' },
              { id: 6, label: '2.5 - 3 Cr' },
              { id: 7, label: '3 - 5 Cr' },
              { id: 8, label: '5 - 10+ Cr' },
            ]}
            isPrimaryColorStyle={true}
            textSize="1.3"
            isFixWidth={true}
            onSelectVal={(_, e) =>
              dynamicNavigation({
                minPrice: parsePriceRange(e?.label)?.min,
                maxPrice: parsePriceRange(e?.label)?.max,
              })
            }
          />
        </View>

        <View style={styles.recommendHeader}>
          <TextComponent text={'Our Recommandation'} fade family={'300'} />
          <TextComponent text={'See all'} isWhite size={1.8} />
        </View>

        <FlatList
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          data={homeData?.project_details}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          onRefresh={refetch}
          refreshing={false}
        />
      </View>
      {modalState && (
        <BtnModalComponent
          activeTags={selectTag[modalState]}
          allData={arrySelector[modalState]}
          //   heading={onPressKey}
          // activeTitle={'select Diet'}
          isModal={modalState}
          onPress={() => setModalState(null)}
          onSelect={e => {
            if (modalState == 1) {
              fetchCities(e);
            } else if (modalState == 2) {
              fetchAreas(e);
            } else if (modalState == 3) {
              setSelectedArea(e);
            }
          }}
          onBackPress={() => setModalState(null)}
        />
      )}
    </ScrollView>
  );
};

export default memo(HomeScreen);
