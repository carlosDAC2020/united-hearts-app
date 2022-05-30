import React,{useState} from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from "../../../assets/images/logo1.png";
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';



const SignInScreen = () =>  {
  const[username, setUsername] = useState("");
  const[password, setPaaword ] = useState("");
    return (
      
          <View style={styles.rout}>
            <Image 
            source={logo}
            style={styles.logo}
            />
            
            <CustomInput 
              pl0ceholder="username" 
              volue={username} 
              setValue={setUsername}/>
            
            <CustomInput 
              ploceholder="username" 
              volue={password} 
              setValue={setPaaword} 
              secureTextEntry={true}/>

            <CustomButton/>
          </View>
        
    );
}

const styles= StyleSheet.create({
    rout:{
      alignItems:"center",
      padding:10,  
    },
    logo:{
        borderRadius:150,
        paddingHorizontal:10,
        marginVertical:15,
    },
    
});

export default SignInScreen;
