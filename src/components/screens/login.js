import React from 'react';

import { firebaseConfig } from '../firebase-config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import MyBlur from '../../components/MyBlur';

const LogIn = ({navigation}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


  const {height} = Dimensions.get('window');
 




    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home');
      })
      .catch(error => {
        Alert.alert(error.message)
        console.log(error)
      })
    }
  return (
    <>
      <MyBlur />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Hello Again!</Text>
            <Text style={styles.body}>Welcome back you've been missed!</Text>

            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Enter username"
              autoCorrect={false}
            />
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry={true}
            />

            <TouchableOpacity>
              <Text
                style={[
                  styles.buttonsText,
                  {fontWeight: 'bold', lineHeight: 30, textAlign: 'right'},
                ]}>
                Recovery Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Sign In</Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center'}}>Or continue with</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button1}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
                  }}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}
                style={styles.button1}>
                <Image
                  source={{
                    uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png',
                  }}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}
                style={styles.button1}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
                  }}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    color: '#353147',
  },
  body: {
    padding: 20,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147',
  },
  buttonsText: {
    fontWeight: '500',
    color: '#353147',
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
    padding: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    marginHorizontal: 10,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',

    backgroundColor: '#DFE3E630',
    marginTop: 40,
  },
  input: {
    backgroundColor: '#F7F7F7',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#FD6D6A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
});