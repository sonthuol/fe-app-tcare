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

const CreateMedicalRecordsScreen = props => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [symptom, setSymptom] = useState('');
  const [patientId, setPatientId] = useState('');
  const [patientAsyncStorage, setPatientAsyncStorage] = useState([]);
  const dateSelected = props.route.params.dateSelected;
  const doctorId = props.route.params.doctorId;
  const scheduleId = props.route.params.scheduleId;
  // Passing configuration object to axios
  useEffect(() => {
    getAsyncStorage();
  }, [patientId]);

  function getAsyncStorage() {
    AsyncStorage.getItem('profilePatient', (err, result) => {
      result = JSON.parse(result);
      setPatientAsyncStorage(result);
      setPatientId(result.id);
    });
  }

  const handleRegisterMedicalRecords = () => {
    console.log('====================================');
    console.log(name);
    console.log(gender);
    console.log(birthday);
    console.log(phoneNumber);
    console.log(address);
    console.log(symptom);
    console.log(patientId);
    console.log(doctorId);
    console.log(dateSelected);
    console.log(scheduleId);
    console.log('====================================');
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
            onChangeText={name => setName(name)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="transgender" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Giới tính"
            onChangeText={gender => setGender(gender)}
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
            onChangeText={birthday => setBirthday(birthday)}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.iconInput} name="street-view" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Địa chỉ"
            onChangeText={address => setAddress(address)}
          />
        </View>
        <View style={styles.containerInputSymptom}>
          <Icon style={styles.iconInputSymptom} name="user" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Triệu chứng"
            onChangeText={symptom => setSymptom(symptom)}
          />
        </View>
        <TouchableOpacity
          style={[styles.containerSubmit, {backgroundColor: '#0aada8'}]}
          onPress={handleRegisterMedicalRecords}>
          <Text style={styles.submitText}>Đặt lịch khám</Text>
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
  containerInputSymptom: {
    width: '90%',
    height: 100,
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
  iconInputSymptom: {
    paddingLeft: 20,
    paddingTop: 35,
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
