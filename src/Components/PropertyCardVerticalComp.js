import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  callWhite,
  checkBoxIcon,
  heart,
  heartFilledLike,
  locationGray,
  propertyIcon,
  shareIcon,
  SqFitIcon,
  whatappIcon,
} from '../Assets';
import ThemeButton from './ThemeButton';
import { hp, wp } from '../Hooks/useResponsive';
import { Colors } from '../Theme/Variables';
import { TextComponent } from './TextComponent';
import { Touchable } from './Touchable';
import { imageUrl } from '../Utils/Urls';
import useReduxStore from '../Hooks/UseReduxStore';
import { favProject } from '../Redux/Action/FavProjectAction';
import {
  formatPrice,
  formatPriceToPKStandard,
  makeCall,
  sendSMS,
  sendWhatsApp,
} from '../Services/GlobalFunctions';

const PropertyCardVerticalComp = ({
  image,
  logo,
  price,
  title,
  type,
  area,
  location,
  tag = [],
  onCallPress,
  onWhatsappPress,
  onSharePress,
  mainViewStyles,
  refetchKeys,
  refetch,
  item,
}) => {
  const { dispatch, getState, queryClient } = useReduxStore();

  const { favProjects } = getState('favProjects');
  return (
    <View style={{ ...styles.container, ...mainViewStyles }}>
      <Image source={{ uri: imageUrl(image) }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image source={logo} resizeMode="contain" style={styles.logo} />
          <TouchableOpacity
            onPress={() => {
              dispatch(favProject(item?.id));
              setTimeout(() => {
                if (refetch) refetch();
                if (refetchKeys) queryClient.invalidateQueries(['countries']);
              }, 1000);
            }}
          >
            <Image
              source={
                favProjects.find(id => id == item?.id) ? heartFilledLike : heart
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.priceRow}>
          <TextComponent text="PKR " size={1.3} />
          <TextComponent
            text={formatPriceToPKStandard(price)}
            size={1.5}
            family="bold"
          />
        </View>
        <TextComponent text={title} size={1.3} />
        <View style={styles.row}>
          <Image
            source={propertyIcon}
            resizeMode="contain"
            style={styles.rowIcon}
          />
          <TextComponent text={type} size={1.3} />
          <Image
            source={propertyIcon}
            resizeMode="contain"
            style={styles.rowIcon}
          />
          <TextComponent text={area} size={1.3} />
        </View>
        <View style={styles.row}>
          <Image
            source={locationGray}
            resizeMode="contain"
            style={styles.rowIcon}
          />
          <TextComponent text={location} size={1.3} />
        </View>
        <View style={styles.tagRow}>
          {tag.map((res, index) => {
            return (
              <View key={index.toString()} style={styles.tag}>
                <Image source={checkBoxIcon} style={styles.icon} />
                <Text style={styles.tagText}>{res}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.actionRow}>
          <ThemeButton
            title={'Call'}
            image={callWhite}
            isTheme
            style={styles.callButton}
            textStyle={styles.callButtonText}
            imageStyle={styles.callButtonIcon}
            onPress={() => makeCall(item?.phone_1)}
          />
          <ThemeButton
            title={'SMS'}
            isTransparent
            style={{ ...styles.callButton, width: wp('10') }}
            textStyle={styles.callButtonText}
            onPress={() => sendSMS(item?.phone_1)}
          />
          <Touchable onPress={() => sendWhatsApp(item?.phone_1)}>
            <Image
              source={whatappIcon}
              resizeMode="contain"
              style={styles.socialIcon}
            />
          </Touchable>
          {/* <Touchable onPress={() => sendSMS(item?.phone_1)}>
            <Image
              source={shareIcon}
              resizeMode="contain"
              style={styles.socialIcon}
            />
          </Touchable> */}
        </View>
      </View>
    </View>
  );
};
export default PropertyCardVerticalComp;

const styles = StyleSheet.create({
  container: {
    width: wp('90'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: wp('35'),
    height: hp('28'),
    borderRadius: 20,
  },
  infoContainer: {
    width: wp('55'),
    height: hp('25'),
    justifyContent: 'space-between',
    paddingVertical: hp('1'),
    marginLeft: wp('2'),
  },
  logo: {
    width: wp('20'),
    height: hp('5'),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('0.5'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5'),
  },
  rowIcon: {
    width: wp('5'),
    height: hp('2'),
    // backgroundColor: 'red',
    left: wp('-1'),
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('0.5'),
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1'),
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    paddingHorizontal: wp('2'),
    paddingVertical: hp('0.4'),
    borderRadius: 20,
    marginRight: wp('2'),
  },
  tagText: {
    color: Colors.primaryColor,
    fontSize: hp('1.4'),
  },
  icon: {
    width: wp('3.5'),
    height: hp('2'),
    resizeMode: 'contain',
  },
  iconText: {
    color: Colors.gray,
    fontSize: hp('1.4'),
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callButton: {
    width: wp('35'),
    height: hp('4'),
  },
  callButtonText: {
    fontSize: hp('1.5'),
  },
  callButtonIcon: {
    width: wp('5'),
    height: hp('2'),
  },
  socialIcon: {
    width: wp('8'),
    height: hp('4'),
  },
});
