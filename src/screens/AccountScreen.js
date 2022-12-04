import React, {useState, useEffect} from 'react';
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

const AccountScreen = props => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [patientId, setPatientId] = useState('');
  const [patientAsyncStorage, setPatientAsyncStorage] = useState([]);
  const [status, setStatus] = useState();
  const [message, setMessage] = useState('');
  // Passing configuration object to axios
  useEffect(() => {
    getAsyncStorage();
  }, []);

  function getAsyncStorage() {
    AsyncStorage.getItem('profilePatient', (err, result) => {
      result = JSON.parse(result);
      setPatientAsyncStorage(result);
      setPatientId(result.id);
      setName(result.name);
      setBirthday(result.birthday);
      setPhoneNumber(result.phoneNumber);
      setGender(result.gender);
      setAddress(result.address);
    });
  }

  function saveAsyncStorage() {
    AsyncStorage.setItem('profilePatient', JSON.stringify(patient));
  }

  const handleUpdatePatient = () => {
    var patientUpdate = JSON.stringify({
      name: name,
      birthday: birthday,
      phoneNumber: phoneNumber,
      address: address,
      gender: gender,
    });
    // console.log('====================================');
    // console.log(log);
    // console.log('====================================');
    let url = 'http://10.0.2.2:8080/api/patient/' + patientId;
    fetch(url, {
      method: 'PUT',
      body: patientUpdate,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          ToastAndroid.show(res.message, ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(res.message, ToastAndroid.SHORT);
        }
      });
    AsyncStorage.setItem('profilePatient', JSON.stringify(patientUpdate));
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={{marginTop: 20}}></View>
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody, {alignSelf: 'flex-start'}]}>
            Thông tin tài khoản
          </Text>
        </View>
        <View style={{marginTop: 20}}></View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="user" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Họ tên bệnh nhân"
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="transgender" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Giới tính"
            onChangeText={setGender}
            value={gender}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="phone" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Số điện thoại"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="calendar" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Ngày/Tháng/Năm sinh"
            onChangeText={setBirthday}
            value={birthday}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="street-view" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Địa chỉ"
            onChangeText={setAddress}
            value={address}
          />
        </View>
        <TouchableOpacity
          style={[styles.containerSubmit, {backgroundColor: '#0aada8'}]}
          onPress={handleUpdatePatient}>
          <Text style={styles.submitText}>Cập nhật</Text>
        </TouchableOpacity>
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
    fontSize: 25,
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

export default AccountScreen;
