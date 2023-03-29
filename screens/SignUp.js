/*import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative" style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter Your Full Name" />
      <TextInput style={styles.input} placeholder="Enter Your Mobile No." />
      <TextInput style={styles.input} placeholder="Enter Your Age" />
      <TextInput style={styles.input} placeholder="Enter Your Gender" />
      <Button title="Submit"
        onPress={() => navigation.navigate("Discover")}
      ></Button>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
      marginTop:30,
      padding:20,
      backgroundColor:"grey",
  },

  // item:{
  //     fontSize:20,
  //     padding:15,
  //     backgroundColor:"cyan",
  // }

  input:{
      backgroundColor:"white",
      padding:10,
      borderWidth:2,
      borderRadius:10,
      marginTop:10,
      marginBottom:10,

  }
})
*/
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';


//formin
import {Formik} from 'formik';
//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';


//import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, StyledTextInput} from './style';
import {View, TouchableOpacity } from 'react-native';


import{
  StyledContainer,
  InnerContainer,
  PageLogo,
  pageTitle,
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
  TextLinkContent
} from 'E:\OLS-UI-master\components\AUth\style.js';
//import {View} from 'react-native';

//colors
const {brand, darklight, primary } = Colors;


//datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUp= () => {
const [hidePassword, setHidePassword] = useState(true);
const [show, setShow] = useState(false);
const [date, setDate] = usestate(new Date(2000, 0, 1));

// actual date of birth to be sent
const [dob, setDob] = useState();


const onchange = (event, selectedDate) =>{
  const currentdate = selectedDate || date;
  setShow(false);
  setDate(currentDate);
  setDob(currentDate);
}

const showDatePicker = () =>{
  setShow(true);
}

  return (
    <StyledContainer>
      <StatusBar style="dark"/>
    <InnerContainer>
               
                 <pageTitle>LAUNDRY</pageTitle>
                 <SubTitle>Account SignUp</SubTitle>


                 {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )}


                 <formik
                      initialValues={{fullName:'', email: '',dateofBirth:'', password: '' , confirmPassword: ''}}
                      onSubmit={(values) => {
                        console.log(values);
                      }}   
                >
                 {({handlechange, handleBlur, handleSubmit, Values}) => (
                 <StyledFormArea>
                   <MyTextInput
                     label="Full Name"
                     icons="person"
                     placeholder="vinayak gautam"
                     placeholderTextColor={darkLight}
                     onChangeText={handlechange('fullName')}
                     onBlur={handleBlur('fullName')}
                     value={values.fullName}
                     keyboardType="email-address" 
                   />
                   <MyTextInput
                     label="Email Address"
                     icons="mail"
                     placeholder="andyj@gmail.com"
                     placeholderTextColor={darkLight}
                     onChangeText={handlechange('email')}
                     onBlur={handleBlur('email')}
                     value={values.email}
                     keyboardType="email-address" 
                   />
                   <MyTextInput
                     label="Date of Birth"
                     icons="calendar"
                     placeholder="YYYY - MM - DD"
                     placeholderTextColor={darkLight}
                     onChangeText={handlechange('dateofBirth')}
                     onBlur={handleBlur('dateofBirth')}
                     value={dob ? dob.toDateString() : ''}
                     isDate={true}
                     editable={false}
                     showDatePicker={showDatePicker}
                     
                   />
                   <MyTextInput
                     label="password"
                     icons="lock"
                     placeholder="* * * * * * * "
                     placeholderTextColor={darkLight}
                     onChangeText={handlechange('password')}
                     onBlur={handleBlur('password')}
                     value={values.password}
                     secureTextEntry={hidePassword}
                     isPassword={true}
                     hidePassword={hidePassword}
                     setHidePassword={setHidePassword}
                    />
                    <MyTextInput
                     label=" Confirm Password"
                     icons="lock"
                     placeholder="* * * * * * * "
                     placeholderTextColor={darkLight}
                     onChangeText={handlechange(' confirmPassword')}
                     onBlur={handleBlur('confirmPassword')}
                     value={values.confirmPassword}
                     secureTextEntry={hidePassword}
                     isPassword={true}
                     hidePassword={hidePassword}
                     setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                      <ButtonText>LOGIN</ButtonText>
                    </StyledButton>
                    <Line/>
                    <ExtraView>
                      <ExtraText> already have an account? </ExtraText>
                      <TextLink>
                        <TextLinkContent>LOGIN</TextLinkContent>
                      </TextLink>
                    </ExtraView>
                 </StyledFormArea>)} 

                 </formik>

    </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, hidePassword, setHidePassword,isDate, showDatePicker, ...props}) => {
  return(
    <View>
      <LeftIcon>
        <Octicons name={icons} size={30}  color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
       {!isDate &&  <StyledTextInput {...props}/>}
       {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
           <StyledTextInput {...props}/>
        </TouchableOpacity>
       )}
        {isPassword && (
          <RightIcon onPress={() => setHidePassword(!setHidePassword)}>
           <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
          </RightIcon>
        )}
      
    </View>
  );

};


export default SignUp;