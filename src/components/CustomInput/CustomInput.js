import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



const CustomInput = ({value, setValue, placeholder, secureTextEntry}) =>  {
    return (
      <View style={styles.container}>
        <TextInput 
        volue={value}
        onChangeText={setValue}
        ploceholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}/>
      </View>
    );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:300,
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    },
    input:{
        padding:20,

    }
});
export default CustomInput;