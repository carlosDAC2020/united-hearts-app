import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ImageBackground } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';

const imagef =  { uri: "https://img.freepik.com/vector-gratis/fondo-azul-degradado_23-2149354154.jpg" };

export default function App() {
  return (
    <ImageBackground source={imagef} resizeMode="cover" style={styles.imagefondo}>
      <View style={styles.container}>
        <SignInScreen/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagefondo: {
    flex: 1,
    justifyContent: "center",
  },
});
