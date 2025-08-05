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
const sizes = [
  { id: 1, sqYd: 120 },
  { id: 2, sqYd: 250 },
  { id: 3, sqYd: 500 },
];
const HomeScreen = () => {
  const renderItem = ({ item, index }) => {
    // const isEven = index % 2 === 0;
    // const isLastItem = index === yourData.length - 1;
    // const isSingleItem = yourData.length === 1;

    return (
      <PropertyCardComp
        key={index}
        image={item.image}
        logo={item.logo}
        price={item.price}
        title={item.title}
        beds={item.beds}
        baths={item.baths}
        area={item.area}
        tag1={item.tag1}
        tag2={item.tag2}
      />
    );
  };
  const [selectedId, setSelectedId] = useState(1);
  return (
    <View style={styles.mainContainer}>
      <HomeHeaderComp />
      <ScrollView style={styles.innerContainer}>
        <TextComponent text={'Search by Budget'} fade />
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
            textSize="1.2"
            isFixWidth={true}
          />
        </View>

        <View style={styles.recommendHeader}>
          <TextComponent text={'Our Recommandation'} fade />
          <TextComponent text={'See all'} isThemeColor size={1.8} />
        </View>

        <FlatList
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          data={[
            {
              image:
                'https://images.pexels.com/photos/8417743/pexels-photo-8417743.jpeg',
              logo: homeIcon,
              price: '2.75 - 4 Crore',
              title: 'GOHAR GOLF VISTA - Luxury...',
              beds: 5,
              baths: 4,
              area: 1750,
              tag1: 'Flats For Sale',
              tag2: 'Malir 15',
            },

            {
              image:
                'https://images.pexels.com/photos/8417743/pexels-photo-8417743.jpeg',
              logo: homeIcon,
              price: '2.75 - 4 Crore',
              title: 'GOHAR GOLF VISTA - Luxury...',
              beds: 5,
              baths: 4,
              area: 1750,
              tag1: 'Flats For Sale',
              tag2: 'Malir 15',
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
