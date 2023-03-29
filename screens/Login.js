import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

//formin
import { Formik } from "formik";
//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
//import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, StyledTextInput} from './style';
import { View } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "E:OLS-UI-mastercomponentsAUthstyle.js";
//import {View} from 'react-native';

//colors
const { brand, darklight, primary } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require("./../assets/OLS.jpg")} />
        <pageTitle>LAUNDRY</pageTitle>
        <SubTitle>Account login</SubTitle>

        <formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handlechange, handleBlur, handleSubmit, Values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icons="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handlechange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="password"
                icons="lock"
                placeholder="* * * * * * * "
                placeholderTextColor={darkLight}
                onChangeText={handlechange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>LOGIN</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={25} />
                <ButtonText google={true}>SIGN IN WITH GOOGLE</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText> Don't have an account? </ExtraText>
                <TextLink>
                  <TextLinkContent>SIGNUP</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icons} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!setHidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
