import { StyleSheet } from 'react-native';
import { hp, wp } from '../../Hooks/useResponsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('3'),
    paddingVertical: hp('1'),
    backgroundColor: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 50,
    // flex: 1,
    marginRight: wp('3'),
    width: wp('45'),
    justifyContent: 'center',
    height: hp('5'),
  },
  icon: {
    width: wp('4'),
    height: wp('4'),
    tintColor: '#777',
    marginRight: wp('2'),
  },
  input: {
    fontSize: wp('4'),
    color: '#333',
    width: wp('20'),
  },
  clearText: {
    color: '#1e88e5',
    fontSize: wp('4'),
    marginRight: wp('3'),
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('13'),
  },
  toggleIcon: {
    width: wp('5'),
    height: wp('5'),
    tintColor: '#1e88e5',
    marginLeft: wp('2'),
  },
  flatListContainer: {
    flexGrow: 1,
    // alignSelf: 'center',
    paddingTop: hp('2'),
    paddingHorizontal: wp('2'),
    paddingBottom: hp('10'),
  },
});
