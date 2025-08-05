import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  ImageBackground,
} from 'react-native';
import { TextComponent } from '../../Components/TextComponent';
import { styles } from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  lock,
  userIcon,
  phone,
  logo,
  rememberImg,
  rememberEmpty,
  username,
  emailIcon,
  passwordIcon,
  company,
  google,
  facebook,
  apple,
  locksetting,
  sms,
  user,
  signupBg,
  logoImg,
  tickSquare,
} from '../../Assets';
import { InputComponent } from '../../Components/InputComponent';
import { Controller } from 'react-hook-form';
import { Touchable } from '../../Components/Touchable';
import useRegister from './useRegisterScreen';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import { LoginBg } from '../../Assets';
import { hp, wp } from '../../Hooks/useResponsive';
// import SocialBottomComp from '../../Components/SocialBottomComp';

const RegisterScreen = ({ navigation }) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    goBack,
    loginNav,
    signUpButton,
    PolicyValue,
    policy,
    socialLoginFun,
  } = useRegister(navigation);
  return (
    <View source={LoginBg} style={styles.ImgBg}>
      {/* <Image source={logoImg} resizeMode="contain" style={styles.logoImage} /> */}
      <KeyBoardWrapper
        styles={styles.logInMain}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.loginBottom}>
          <View style={styles.loginTop}>
            <TextComponent text={'Register'} styles={styles.signInText} />
          </View>

          <InputComponent
            {...{
              name: 'first_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Last Name',
              defaultValue: __DEV__ ? 'first' : '',
              isImage: user,
              viewStyle: { height: hp('5') },
              inputIconStyle: { flex: 0.5 },
            }}
          />
          <InputComponent
            {...{
              name: 'last_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Last Name',
              defaultValue: __DEV__ ? 'last' : '',
              isImage: user,
              viewStyle: { height: hp('5') },
              inputIconStyle: { flex: 0.5 },
            }}
          />

          <InputComponent
            {...{
              name: 'email',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Email Address',
              isImage: sms,
              defaultValue: __DEV__ ? 'dd@gmail.com' : '',
              viewStyle: { height: hp('5') },
              inputIconStyle: { flex: 0.5 },
            }}
          />
          <InputComponent
            {...{
              name: 'password',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Password',
              isImage: locksetting,
              defaultValue: __DEV__ ? 'Test@123' : '',
              isSecure: true,
              inputIconStyle: styles.lockstyle,
              viewStyle: { height: hp('5') },
              inputIconStyle: { flex: 0.4 },
            }}
          />
          <InputComponent
            {...{
              name: 'confirm_password',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Confirm Password',
              isImage: locksetting,
              defaultValue: __DEV__ ? 'Test@123' : '',
              isSecure: true,
              inputIconStyle: styles.lockstyle,
              viewStyle: { height: hp('5') },
              inputIconStyle: { flex: 0.4 },
            }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={tickSquare}
              resizeMode="contain"
              style={{ width: wp('5') }}
            />
            <TextComponent
              text={'I agree to the terms of use and privacy policy'}
              fade
              styles={{ fontSize: hp('1.5'), marginLeft: wp('2') }}
            />
          </View>
          <View style={{ paddingTop: hp('1') }}>
            <ThemeButton
              title={'Register'}
              // onPress={() => navigation.navigate('HomeScreen')}
              onPress={handleSubmit(signUpButton)}
              style={styles.buttonStyle}
              isTheme
              textStyle={{ fontSize: hp('1.5') }}
            />
          </View>
          <View style={styles.barMain}>
            <View style={styles.barLine}></View>
            <TextComponent
              text={'Or Continue With'}
              styles={styles.barText}
              fade
            />
            <View style={styles.barLine}></View>
          </View>
          {/* <SocialBottomComp onSocialPress={socialLoginFun} /> */}
        </View>
      </KeyBoardWrapper>
    </View>
  );
};
export default memo(RegisterScreen);
