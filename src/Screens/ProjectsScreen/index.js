import React, { memo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Switch,
  StyleSheet,
} from 'react-native';
import PropertyCardVerticalComp from '../../Components/PropertyCardVerticalComp';
import {
  arrDown,
  drawerIcon,
  filterIcon,
  homeIcon,
  PakFlag,
} from '../../Assets';
import { TextComponent } from '../../Components/TextComponent';
import { hp, wp } from '../../Hooks/useResponsive';
import { MultiSelectButton } from '../../Components/MultiSelectButton';
import { Colors } from '../../Theme/Variables';
import { HeaderComponent } from '../../Components/HeaderComp';
import { styles } from './styles';
import useProjectsScreen from './useProjectsScreen';

const ProjectsScreen = ({ navigation, route }) => {
  const {} = useProjectsScreen(navigation, route);
  return (
    <View style={styles.container}>
      <HeaderComponent headerTitle={'New Projects'} rightIconImg={PakFlag} />

      <View style={styles.switchRow}>
        <Image source={homeIcon} resizeMode="contain" style={styles.homeIcon} />
        <Switch
          trackColor={{ false: '#ccc', true: Colors.primaryColor }}
          thumbColor={true ? '#fff' : '#f4f3f4'}
        />
      </View>

      <TextComponent
        text={'Explore new ventures in Pakistan'}
        family={'bold'}
        styles={styles.venturesText}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <MultiSelectButton
          items={[
            { id: 1, label: 'Filter', image: filterIcon },
            { id: 2, label: 'City', image: arrDown },
            { id: 3, label: 'Price Range', image: arrDown },
            { id: 4, label: 'Area Range', image: arrDown },
          ]}
          isPrimaryColorStyle={true}
          isDisable={true}
        />
      </ScrollView>

      <PropertyCardVerticalComp
        image="https://images.pexels.com/photos/8417743/pexels-photo-8417743.jpeg"
        logo={homeIcon}
        price="PKR 39 Lacs"
        title="City Housing Society - Phase 2"
        type="Residential Plots"
        area="5 Marla"
        location="Faisalabad - Pakistan"
        tag={['Residential Plot']}
        onCallPress={() => console.log('Call pressed')}
        onWhatsappPress={() => console.log('WhatsApp pressed')}
        onSharePress={() => console.log('Share pressed')}
      />
    </View>
  );
};

export default memo(ProjectsScreen);
