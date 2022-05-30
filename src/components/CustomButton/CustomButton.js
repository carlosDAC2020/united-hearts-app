import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';



const CustomButton = () =>  {
    return (
      <TouchableOpacity
       style={styles.container}
       onPress={()=> console.log("inicio de secion")}>
          <Text style={styles.text}>Sing-In</Text>
      </TouchableOpacity>
    );
}
const styles= StyleSheet.create({
    container:{
      width:170,
      borderRadius:20,
      padding: 15,
      backgroundColor:"#00bfff",
      alignItems:"center",
      paddingHorizontal:10,
      marginVertical:15,
    },
    text:{
        fontWeight:"bold",
        color:"whitw",
    }
    
});
export default CustomButton;