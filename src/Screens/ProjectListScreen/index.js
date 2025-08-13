import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { memo, useCallback } from 'react';
import { HeaderComponent } from '../../Components/HeaderComp';
import { MultiSelectButton } from '../../Components/MultiSelectButton';
import {
  arrDown,
  boxesEmpty,
  drawerEmpty,
  filterIcon,
  homeIcon,
  searchIcon,
  sortIcon,
} from '../../Assets';
import { hp, wp } from '../../Hooks/useResponsive';
import { styles } from './styles';
import PropertyCardVerticalComp from '../../Components/PropertyCardVerticalComp';
import { DataNotFound } from '../../Components/DataNotFound';
import { keyExtractor } from '../../Utils';
import useProjectListScreen from './useProjectListScreen';
import PropertyCardComp from '../../Components/PropertyCardComp';

const ProjectListScreen = ({ navigation, route }) => {
  const { projectList, listType, setListType } = useProjectListScreen(
    navigation,
    route,
  );
  console.log('dsbklsdbvklsdbvbsdklvbsdlbvlds', route?.params);

  const filterArry = [
    {
      image: filterIcon,
      name: 'Filter',
    },
    {
      image: sortIcon,
      name: 'Sort',
    },
    {
      name: route?.params?.city?.name ?? '',
      image: arrDown,
    },
  ];

  const renderItem = useCallback(
    ({ item, index }) => {
      // const isEven = index % 2 === 0;
      // const isLastItem = index === yourData.length - 1;
      // const isSingleItem = yourData.length === 1;

      return listType == 1 ? (
        <PropertyCardVerticalComp
          image={item?.image}
          logo={homeIcon}
          price={item?.price}
          title={item?.project_name}
          type={`${item?.type_and_purpose}`}
          area={item?.area_with_type}
          location={`${item?.city_name} - ${item?.country_name}`}
          //   tag={['Residential Plot']}
          onCallPress={() => console.log('Call pressed')}
          onWhatsappPress={() => console.log('WhatsApp pressed')}
          onSharePress={() => console.log('Share pressed')}
          mainViewStyles={{ marginTop: hp('1') }}
          // refetch={refetch}
          item={item}
        />
      ) : (
        <PropertyCardComp
          item={item}
          key={index}
          image={item?.image}
          logo={homeIcon}
          price={item?.price}
          title={item?.project_name}
          beds={item?.total_bedrooms}
          baths={item?.total_bathrooms}
          area={item?.area_with_type}
          tag1={item?.area_name}
          tag2={item?.type_and_purpose}
        />
      );
    },
    [projectList],
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent headerTitle={'filter screen '} isBack />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: wp('4'),
        }}
      >
        <MultiSelectButton
          items={filterArry}
          isDisable
          isPrimaryColorStyle
          btnStyle={{ backgroundColor: 'white' }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: wp('2'),
        }}
      >
        <View style={styles.searchBox}>
          <Image
            source={searchIcon} // Search icon
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder={route.params?.area?.name}
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Clear All */}
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>

        {/* View Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity onPress={() => setListType(1)}>
            <Image
              source={drawerEmpty} // List icon
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setListType(2)}>
            <Image
              source={boxesEmpty} // Grid icon
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {listType == 1 && (
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          data={projectList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<DataNotFound />}
        />
      )}
      {listType == 2 && (
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          data={projectList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<DataNotFound />}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default memo(ProjectListScreen);
