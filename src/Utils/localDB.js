import { Linking } from 'react-native';
import {
  aboutGray,
  callGray,
  draftGray,
  heartGray,
  homeGray,
  logOutGray,
  quotaGray,
  saveGray,
  settingGray,
  termGray,
} from '../Assets';
import NavigationService from '../Services/NavigationService';
import { aboutUrl, privacyUrl } from './Urls';
import { store } from '../Redux/Reducer';
import { logOutUser } from '../Redux/Action/AuthAction';

export const sizes = [
  { id: 1, sqYd: 120 },
  { id: 2, sqYd: 250 },
  { id: 3, sqYd: 500 },
];
export const bedroomsArry = [
  { id: 'All', label: 'All' },
  { id: 'studio', label: 'studio' },
  { id: 1, label: 1 },
  { id: 2, label: 2 },
  { id: 3, label: 3 },
  { id: 4, label: 4 },
  { id: 5, label: 5 },
  { id: 6, label: 6 },
  { id: 7, label: 7 },
  { id: 8, label: 8 },
  { id: 9, label: 9 },
  { id: '10+', label: '10+' },
];
export const bathroomsArry = [
  { id: 'All', label: 'All' },
  { id: 1, label: 1 },
  { id: 2, label: 2 },
  { id: 3, label: 3 },
];
export const profilesBtn = [
  {
    id: 1,
    label: 'Edit Profile',
    icon: saveGray,
    onPress: () => NavigationService.navigate('EditProfileScreen'),
  },
  {
    id: 2,
    label: 'Favorites',
    icon: heartGray,
    onPress: () => NavigationService.navigate('FavorateScreen'),
  },
  {
    id: 3,
    label: 'Drafts',
    icon: draftGray,
    onPress: () => NavigationService.navigate('DraftAdScreen'),
  },
  {
    id: 5,
    label: 'My Quota & Credits',
    icon: quotaGray,
    onPress: () => NavigationService.navigate('QuotaScreen'),
  },
];
export const profilesBottomBtn = [
  {
    id: 1,
    label: 'Invite Friends',
    icon: saveGray,
    onPress: () => Linking.openURL('https://www.realstateshop.com/'),
  },
  {
    id: 4,
    label: 'About Us',
    icon: aboutGray,
    onPress: () => Linking.openURL(aboutUrl),
  },
  {
    id: 4,
    label: 'Terms & Privacy',
    icon: termGray,
    onPress: () => Linking.openURL(privacyUrl),
  },
  {
    id: 5,
    label: 'Log Out',
    icon: logOutGray,
    onPress: () => store.dispatch(logOutUser()),
  },
  // { id: 6, label: 'Settings', icon: settingGray },
];
