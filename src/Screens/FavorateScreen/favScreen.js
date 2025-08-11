import { View, Text, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import { keyExtractor } from '../../Utils';
import { DataNotFound } from '../../Components/DataNotFound';
import PropertyCardComp from '../../Components/PropertyCardComp';
import { styles } from './styles';
import useFavorateScreen from './useFavorateScreen';
import { homeIcon } from '../../Assets';
import PropertyCardVerticalComp from '../../Components/PropertyCardVerticalComp';
import { hp } from '../../Hooks/useResponsive';

const favScreen = ({ navigation, route }) => {
  const { favList, refetch } = useFavorateScreen(navigation, route);
  const renderItem = useCallback(
    ({ item, index }) => {
      // const isEven = index % 2 === 0;
      // const isLastItem = index === yourData.length - 1;
      // const isSingleItem = yourData.length === 1;

      return (
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
          refetch={refetch}
          item={item}
        />
        // <PropertyCardComp
        //   key={index}
        //   image={item?.image}
        //   logo={homeIcon}
        //   price={item?.price}
        //   title={item?.project_name}
        //   beds={item?.total_bedrooms}
        //   baths={item?.total_bathrooms}
        //   area={'1.2'}
        //   tag1={item?.area_name}
        //   tag2={item?.type_and_purpose}
        //   item={item}
        //   refetch={refetch}
        // />
      );
    },
    [favList],
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
        data={favList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<DataNotFound />}
      />
    </View>
  );
};

export default favScreen;
