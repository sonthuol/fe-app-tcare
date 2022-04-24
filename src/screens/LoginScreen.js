import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
const LoginScreen = props => {
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
        <Inputs name="Số điện thoại" icon="phone" />
        <Inputs name="Mật khẩu" icon="lock" />
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody, {alignSelf: 'flex-end'}]}>
            Quên mật khẩu ?
          </Text>
        </View>
        <Submit color="#0148a4" title="Login" />
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

export default LoginScreen;
