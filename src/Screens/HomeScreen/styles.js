import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Variables';
import { hp, wp } from '../../Hooks/useResponsive';

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    width: wp('90'),
    alignSelf: 'center',
    marginTop: hp('-12'),
  },
  buttonWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp('1'),
  },
  recommendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1'),
  },
  flatListContainer: {
    justifyContent: 'space-between',
    marginTop: hp('1'),
    // paddingBottom: hp('100'),
  },
  container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: wp('80'),
    marginBottom: hp('2'),
    marginTop: hp('1'),
  },
  card: {
    width: wp('25'),
    height: hp('6'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  selectedCard: {
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
  },
  unselectedCard: {
    backgroundColor: 'white',
    borderColor: Colors.primaryColor,
  },
  text: {
    fontWeight: 'bold',
  },
  subText: {},
  selectedText: {
    color: 'white',
  },
});
