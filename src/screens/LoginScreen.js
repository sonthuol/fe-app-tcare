import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';

import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState();
  const [message, setMessage] = useState('');
  const [patient, setPatient] = useState({});

  const handleLogin = () => {
    fetch('http://10.0.2.2:8080/api/patient/signin', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(res => {
        setStatus(res.status);
        setMessage(res.message);
        setPatient(res.data.patient);
      });
    if (status === 200) {
      saveAsyncStorage();
      ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
      props.navigation.navigate('Home');
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  function saveAsyncStorage() {
    AsyncStorage.setItem('profilePatient', JSON.stringify(patient));
  }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('../images/banner_img.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Tcare, Xin chào</Text>
        <Text style={styles.textBody}>
          Đăng nhập tài khoản của bạn để sử dụng ứng dụng
        </Text>
        <View style={{marginTop: 20}}></View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="phone" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Số điện thoại"
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="lock" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody, {alignSelf: 'flex-end'}]}>
            Quên mật khẩu ?
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.containerSubmit, {backgroundColor: '#0aada8'}]}
          onPress={handleLogin}>
          <Text style={styles.submitText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          <Text style={styles.textBody}>Bạn chưa có tài khoản ?</Text>
          <Text
            style={[styles.textBody, {color: 'blue', marginLeft: 5}]}
            onPress={() => props.navigation.navigate('Register')}>
            Đăng ký tài khoản
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
  },
  textTitle: {
    fontSize: 50,
    marginVertical: 10,
    color: 'black',
    fontFamily: 'SourceSansPro-SemiBoldItalic',
  },
  textBody: {
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    fontSize: 15,
    color: 'black',
  },
  containerInput: {
    width: '90%',
    height: 50,
    borderRadius: 15,
    marginVertical: 5,
    borderWidth: 3.5,
    borderColor: '#0779ef',
    flex: 1,
    flexDirection: 'row',
  },
  iconInput: {
    paddingLeft: 20,
    paddingTop: 10,
    color: '#0779e4',
  },
  inputText: {
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    width: '70%',
    marginLeft: 5,
    fontSize: 18,
  },
  containerSubmit: {
    width: '90%',
    height: 50,
    borderColor: 'blue',
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 22,
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default LoginScreen;
