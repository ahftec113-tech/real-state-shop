import { View, Text } from 'react-native';
import React, { memo } from 'react';
import PropertyCardVerticalComp from '../../Components/PropertyCardVerticalComp';
import { homeIcon } from '../../Assets';

const ProjectsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <PropertyCardVerticalComp
        image="https://images.pexels.com/photos/8417743/pexels-photo-8417743.jpeg" // main image
        logo={homeIcon} // logo if you use it somewhere
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
