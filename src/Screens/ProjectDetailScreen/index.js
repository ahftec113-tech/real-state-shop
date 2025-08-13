import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { memo } from 'react';
import { hp } from '../../Hooks/useResponsive';
import ThemeButton from '../../Components/ThemeButton';
import { TextComponent } from '../../Components/TextComponent';
import { styles } from './styles';
import { Colors } from '../../Theme/Variables';

const ProjectDetailScreen = () => {
  return (
    // <ScrollView  contentContainerStyle={{flex:1,paddingBottom:hp('10'),backgroundColor:"white"}} showsVerticalScrollIndicator={false} >

    // </ScrollView>

    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          {/* <Ionicons name="arrow-back" size={wp('5')} color="black" /> */}
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            {/* <Ionicons name="heart-outline" size={wp('5')} color="black" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            {/* <Ionicons name="share-social-outline" size={wp('5')} color="black" /> */}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Image Section */}
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
            }}
            style={styles.mainImage}
          />
          {/* Overlay counters */}
          <View style={styles.overlayCounter}>
            <TextComponent text="1/3" size="1.2" isWhite />
          </View>
          <View style={styles.overlayCamera}>
            {/* <Ionicons name="camera-outline" size={wp('4')} color="white" /> */}
            <TextComponent text="1/15" size="1.2" isWhite />
          </View>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <View style={styles.priceBadge}>
            <TextComponent text="PKR" isWhite />
            <TextComponent text="10.1 Crore" isWhite family="700" />
          </View>
          <TextComponent text="House for sale" size="1.4" />
          <TextComponent text="40 minutes ago" size="1.1" fade />
        </View>

        {/* Location */}
        <TextComponent
          text="Falcon Complex New Malir, Karachi"
          size="1.4"
          family="500"
          styles={styles.location}
        />

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            {/* <Ionicons name="bed-outline" size={wp('4')} color="black" /> */}
            <TextComponent text="5" size="1.2" />
          </View>
          <View style={styles.statItem}>
            {/* <Ionicons name="water-outline" size={wp('4')} color="black" /> */}
            <TextComponent text="4" size="1.2" />
          </View>
          <View style={styles.statItem}>
            {/* <Ionicons name="layers-outline" size={wp('4')} color="black" /> */}
            <TextComponent text="650 (SQ. FT.)" size="1.2" />
          </View>
        </View>

        {/* Description */}
        <TextComponent
          text="Buy Your Ideal 500 Square Yards House In A Prime Location Of Karachi"
          size="1.3"
          styles={styles.description}
        />
        <TouchableOpacity>
          <TextComponent
            text="View Full Description"
            size="1.3"
            family="500"
            styles={styles.linkText}
          />
        </TouchableOpacity>

        {/* Features */}
        <View style={styles.featuresWrapper}>
          <TextComponent text="Features & Amenities" size="1.4" family="600" />
          <View style={styles.featuresRow}>
            <View style={styles.featureCol}>
              <TextComponent text="Built in year" size="1.2" fade />
              <TextComponent text="Parking Spaces: 2" size="1.2" fade />
              <TextComponent text="Double Glazed Windows" size="1.2" fade />
              <TextComponent text="Central Air Conditioning" size="1.2" fade />
            </View>
            <View style={styles.featureCol}>
              <TextComponent text="Central Heating" size="1.2" fade />
              <TextComponent text="Flooring" size="1.2" fade />
              <TextComponent text="Electricity Backup" size="1.2" fade />
              <TextComponent text="Waste Disposal" size="1.2" fade />
            </View>
          </View>
          <TouchableOpacity>
            <TextComponent
              text="View 53 more amenities"
              size="1.2"
              family="500"
              styles={styles.linkText}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <ThemeButton
          title="Call"
          isTheme
          style={styles.callBtn}
          //   iconLeft={<Ionicons name="call" size={wp('4')} color="white" />}
        />
        <ThemeButton
          title="SMS"
          isTransparent
          style={styles.smsBtn}
          textStyle={{ color: Colors.primaryColor }}
        />
        <ThemeButton
          title=""
          isTransparent
          style={styles.whatsappBtn}
          //   iconLeft={<Ionicons name="logo-whatsapp" size={wp('5')} color={Colors.primaryColor} />}
        />
      </View>
    </View>
  );
};

export default memo(ProjectDetailScreen);
