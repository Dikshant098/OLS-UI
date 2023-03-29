import styled from 'styled-components';
import { view, Text, Image } from 'react-native';
import Constants from 'expo-constants';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7E8',
    tertiary: '#1F2937',
    darklight: '#9CA3AF',
    brand: '#6D28D9',
    green: '',
    red: '',

};

const { primary, secondary, tertiary, darklight, brand, grenn, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary };
    `

    export const InnerContainer = styled.view`
    flex: 1;
    width: 100%;
    align-items: center;
    `;

    export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
    `;

    export const pageTitle = styled.text`
    font -size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
    `;
     
    export const SubTitle = styled.Text`
    font-size : 18px;
    margin-bottom: 20px;
    letter-spacing: 10px;
    font-weight: bold;
    color: ${tertiary};
    `;

    export const StyledFormArea = styled.View`
        width: 90%    
     `;
    
     export const  StyledTextInput = styled.TextInput`
     background-color: ${secondary};
     padding:15px;
     padding-left: 55px;
     padding-right: 5px;
     font-size: 16px;
     height: 60px;
     margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
     `;
     
     export const StyledInputLabel = styled.Text`
     color: ${tertiary};
     font-size: 13px;
     text-align: left;
      `;

      export const LeftIcon = styled.View`
      left: 15px;
      top: 38px;
      position: absolute;
      z-index: 1;
      `;

      export const RightIcon = styled.TouchableOpacity`
      left: 15px;
      top: 38px;
      position: absolute;
      z-index: 1;
      `;

      export const StyledButton = styled.TouchableOpacity`
          padding: 15px;
          background-color: ${brand};
          justify-content: center;
          align-item: center;
          border-radius: 5px;
          margin-vertical: 5px;
          height: 60px;


          ${(props) => props.google == true && `
             background-color: ${orange};
             flex-direction: row;
             justify-content: center;
             `}
          
          ` ;

          export const ButtonText = styled.text`
             color: ${primary};
             font-size: 16px;

             ${(props) => props.google == true && `
                 padding: 25px;

             `}

             `;

             export const MsgBox = styled.Text`
                 text-align: enter;
                 font-size: 13px;
                 `;

              export const line = styled.view`
                  height: 1px;
                  width: 100%;
                  background-color: ${darkLight};
                  margin-vertical: 10px;
                   `;   
              
                   export const ExtraView = styled.View`
                        justify-content: center;
                        flex-direction: row;
                        align-items: center;
                        padding: 10px   
                         `;
        export const ExtraText = styled.Text`
        justify-content: center;
        align-content: center;
        color: ${tertiary};
        font-size: 15px;
        `;
        
        
        export const TextLink = styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
        `;

        export const TextLinkContent = styled.Text`
           color: ${brand};
           font-size: 15px;
        `;
        



































        //marginTop:30,

        //padding:20,
        //backgroundColor:"grey",

  

    // item:{
    //     fontSize:20,
    //     padding:15,
    //     backgroundColor:"cyan",
    // }
   /*
    input:{
        backgroundColor:"white",
        padding:10,
        borderWidth:2,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,

    }
    */


export default styles;