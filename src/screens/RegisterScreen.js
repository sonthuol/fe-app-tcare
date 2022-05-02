import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Submit from '../components/Submit';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isActive, setIsActive] = useState(true);

  function handleRegister() {
    if (
      phoneNumber === '0377087266' &&
      password === '24012000' &&
      password === rePassword
    ) {
      props.navigation.navigate('Login');
      ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Đăng ký không thành công', ToastAndroid.SHORT);
    }
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
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="lock" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry={true}
            onChangeText={rePassword => setRePassword(rePassword)}
          />
        </View>
        <TouchableOpacity
          style={[styles.containerSubmit, {backgroundColor: '#0aada8'}]}
          onPress={handleRegister}>
          <Text style={styles.submitText}>Đăng ký</Text>
        </TouchableOpacity>
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
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 5,
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
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default RegisterScreen;
