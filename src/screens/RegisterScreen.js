import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const RegisterScreen = props => {
  const patientInit = [
    {
      phoneNumber: '',
      password: '',
      rePassword: '',
      isActive: true,
    },
  ];

  const [patient, setPatient] = useState(patientInit);

  function handleRegister() {
    return patient;
  }
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('../images/image_register.jpg')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Đăng ký tài khoản</Text>
        <View style={{marginTop: 20}}></View>
        <Inputs name="Số điện thoại" icon="phone" />
        <Inputs name="Mật khẩu" icon="lock" />
        <Inputs name="Nhập lại mật khẩu" icon="lock" />
        <Submit
          color="#0148a4"
          title="Đăng ký"
          handleOnPressSubmit={handleRegister()}
        />
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          <Text style={styles.textBody}>Bạn đã có tài khoản ?</Text>
          <Text
            style={[styles.textBody, {color: 'blue', marginLeft: 5}]}
            onPress={() => props.navigation.navigate('Login')}>
            Đăng nhập
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
    fontFamily: 'Foundation',
    fontSize: 40,
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 15,
    color: 'black',
  },
});

export default RegisterScreen;
