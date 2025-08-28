import { View, Text, FlatList, ScrollView } from 'react-native';
import React, { memo, useCallback } from 'react';
import { homeIcon, PakFlag } from '../../Assets';
import { keyExtractor } from '../../Utils';
import useMyProjectsScreen from './useMyPorjectsScreen';
import { DataNotFound } from '../../Components/DataNotFound';
import PropertyCardVerticalComp from '../../Components/PropertyCardVerticalComp';
import { styles } from './styles';
import { HeaderComponent } from '../../Components/HeaderComp';
import { useDrawer } from '../../Context/DrawerContext';
import { hp } from '../../Hooks/useResponsive';
import { MultiSelectButton } from '../../Components/MultiSelectButton';

const MyProjectsScreen = ({ navigation, route }) => {
  const {
    projectsList,
    refetch,
    isLoading,
    statusData,
    statusValue,
    setStatusValue,
  } = useMyProjectsScreen(navigation, route);
  const { openDrawer } = useDrawer();

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        statusValue?.id == item?.post_status_id && (
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
            isEdit={true}
            area_name={item?.area_name}
          />
        )
      );
    },
    [projectsList, statusValue],
  );

  return (
    <View style={{ flexGrow: 1 }}>
      <HeaderComponent
        headerTitle={'My Ads'}
        isLeftIcon
        onLeftIcon={openDrawer}
      />
      <ScrollView
        contentContainerStyle={styles.topHomeCompContainer}
        showsHorizontalScrollIndicator={false}
      >
        <MultiSelectButton
          items={[
            {
              id: 1,
              name: 'Active ' + statusData?.activeStatus,
              value: 0,
            },
            {
              id: 2,
              name: 'Inactive ' + statusData?.inActiveStatus,
              value: 0,
            },
            {
              id: 3,
              name: 'Pending ' + statusData?.pendingStatus,
              value: 5,
            },
            {
              id: 4,
              name: 'Rejected ' + statusData?.rejectedStatus,
              value: 0,
            },
            {
              id: 5,
              name: 'Expired ' + statusData?.expiredStatus,
              value: 0,
            },
            {
              id: 6,
              name: 'Deleted ' + statusData?.deletedStatus,
              value: 0,
            },
            {
              id: 7,
              name: 'Downgraded ' + statusData?.downgradedStatus,
              value: 0,
            },
          ]}
          isPrimaryColorStyle={true}
          selectedAlter={statusValue}
          onSelectVal={(_, e) => setStatusValue(e)}
        />
      </ScrollView>
      {!isLoading && (
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          data={projectsList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <DataNotFound
              title={"You haven't created any project yet!"}
              subTitle={''}
            />
          }
        />
      )}
    </View>
  );
};

export default memo(MyProjectsScreen);
