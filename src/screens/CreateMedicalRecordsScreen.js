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

import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateMedicalRecordsScreen = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (phoneNumber === '0377087266' && password === '24012000') {
      props.navigation.navigate('Home');
      ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
    } else {
      props.navigation.navigate('Home');
      ToastAndroid.show('Đăng nhập không thành công', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={{marginTop: 20}}></View>
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody, {alignSelf: 'flex-start'}]}>
            Phí khám bệnh: 300.000đ
          </Text>
        </View>
        <View style={{marginTop: 20}}></View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="user" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Họ tên bệnh nhân"
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="transgender" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Giới tính"
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="phone" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Số điện thoại"
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="calendar" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Ngày/Tháng/Năm sinh"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="street-view" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Địa chỉ"
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

export default CreateMedicalRecordsScreen;
