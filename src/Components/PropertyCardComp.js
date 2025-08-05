import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { hp, wp } from '../Hooks/useResponsive';
import { Colors } from '../Theme/Variables';
import {
  bathRoomIcon,
  bedIcon,
  checkBoxIcon,
  heart,
  SqFitIcon,
} from '../Assets';
import { TextComponent } from './TextComponent';

const PropertyCardComp = ({
  image,
  logo,
  price,
  title,
  beds,
  baths,
  area,
  tag1,
  tag2,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.propertyImage}
        imageStyle={styles.imageStyle}
      >
        <Image source={logo} style={styles.marketedBy} resizeMode="contain" />
      </ImageBackground>

      <View style={styles.detailContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextComponent text="PKR " size={1.3} color={Colors.gray} />
          <TextComponent text={price} size={1.5} family="bold" />
        </View>

        <TextComponent
          text={title}
          size={1.4}
          numberOfLines={1}
          styles={{ marginTop: hp('0.5') }}
        />

        <View style={[styles.infoRow, { marginVertical: hp('1') }]}>
          <View style={styles.iconTextRow}>
            <Image source={bedIcon} style={styles.icon} />
            <Text style={styles.iconText}>{beds}</Text>
          </View>
          <View style={styles.iconTextRow}>
            <Image source={bathRoomIcon} style={styles.icon} />
            <Text style={styles.iconText}>{baths}</Text>
          </View>
          <View style={styles.iconTextRow}>
            <Image source={SqFitIcon} style={styles.icon} />
            <Text style={styles.iconText}>{area} (SQ. FT.)</Text>
          </View>
        </View>

        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Image source={checkBoxIcon} style={styles.icon} />
            <Text style={styles.tagText}>{tag1}</Text>
          </View>
          <View style={{ ...styles.tag, marginTop: hp('0.5') }}>
            <Image source={checkBoxIcon} style={styles.icon} />
            <Text style={styles.tagText}>{tag2}</Text>
          </View>
          <TouchableOpacity>
            <Image source={heart} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertyCardComp;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: hp('2'),
    backgroundColor: Colors.white,
    width: wp('43'),
    height: hp('32'),
    marginHorizontal: wp('1'),
    // marginLeft: hp('0.5'),
  },
  propertyImage: {
    width: '100%',
    height: hp('15'),
  },
  imageStyle: {
    width: '100%',
    height: hp('15'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  marketedBy: {
    position: 'absolute',
    top: hp('1'),
    right: wp('2'),
    width: wp('18'),
    height: hp('4'),
  },
  detailContainer: {
    padding: wp('3'),
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1'),
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
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
  },
  tagText: {
    color: Colors.primaryColor,
    fontSize: hp('1.4'),
  },
});
