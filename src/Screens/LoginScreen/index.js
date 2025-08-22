import React, { memo, useState } from 'react';
import { View, Image, ImageBackground, Platform, Text } from 'react-native';
import { TextComponent } from '../../Components/TextComponent';
import { styles } from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  apple,
  facebook,
  google,
  homeIcon,
  lock,
  locksetting,
  logoImg,
  sms,
  tickemp,
  tickfill,
} from '../../Assets';
import { InputComponent } from '../../Components/InputComponent';
import useLogin from './useLoginScreen';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import { LoginBg } from '../../Assets';
import { hp, wp } from '../../Hooks/useResponsive';
import { HeaderComponent } from '../../Components/HeaderComp';
import SocialBottomComp from '../../Components/SocialBottomComp';
import { Touchable } from '../../Components/Touchable';

const LoginScreen = ({ navigation }) => {
  const [check, setCheck] = useState();

  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    onPress,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    rememberValue,
    remember,
    socialLoginFun,
  } = useLogin(navigation);

  return (
    <ImageBackground style={styles.ImgBg} source={LoginBg}>
      {/* <Image source={logoImg} resizeMode="contain" style={styles.logoImage} /> */}
      <HeaderComponent isBack />
      <KeyBoardWrapper
        styles={styles.logInMain}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={homeIcon}
          resizeMode="contain"
          style={{ width: wp('35'), height: hp('10'), alignSelf: 'center' }}
        />
        <TextComponent text={'Welcome Back'} styles={styles.signInText} />
        <TextComponent
          text={
            'Ready to continue your learning journey \nYour path is right there'
          }
          styles={{
            textAlign: 'center',
            marginTop: hp('2'),
            marginBottom: hp('10'),
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
            placeholder: 'Enter Email',
            //   isImage: sms,
            defaultValue: __DEV__ ? 'dd@gmail.com' : '',
            viewStyle: { height: hp('5') },
            inputIconStyle: { flex: 0.4 },
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
            //   isImage: locksetting,
            defaultValue: __DEV__ ? 'Test@123' : '',
            isSecure: true,
            inputIconStyle: styles.inputIconPassword,
            viewStyle: { height: hp('5') },
            inputIconStyle: { flex: 0.4 },
          }}
        />

        <View style={styles.forgotContainer}>
          <TextComponent
            text={'Forgot Password?'}
            styles={styles.forgetText}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          />
        </View>

        <View style={styles.buttonRow}>
          <ThemeButton
            // onPress={() => navigation.navigate('SubscriptionScreen')}
            onPress={handleSubmit(loginUser)}
            title={'Log In'}
            isTheme
            // style={styles.buttonStyle}
            textStyle={styles.buttonText}
          />
        </View>

        <View style={styles.barMain}>
          <View style={styles.barLine}></View>
          <TextComponent
            text={'Or Continue With'}
            styles={styles.barText}
            isThemeColor
            family={'400'}
          />
          <View style={styles.barLine}></View>
        </View>

        <SocialBottomComp onSocialPress={socialLoginFun} />
        <View style={styles.dontHave}>
          <TextComponent
            text={'Don’t have an account?'}
            styles={styles.dontHaveText}
          />
          <Touchable onPress={onPress}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Touchable>
        </View>
      </KeyBoardWrapper>
    </ImageBackground>
  );
};

export default memo(LoginScreen);
