import React, {useState, useEffect, Fragment} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ListItemDoctor from '../components/ListItemDoctor';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
const DoctorScreen = props => {
  const [doctors, setDoctors] = useState([]);
  const [clinicId, setClinicId] = useState(props.route.params.clinicId);
  const [specialtyId, setSpecialtyId] = useState(
    props.route.params.specialtyId,
  );
  const [keyFind, setKeyFind] = useState('');

  // Passing configuration object to axios
  useEffect(() => {
    getAllDoctors();
  }, [keyFind]);
  function getAllDoctors() {
    let url = 'http://10.0.2.2:8080/api/public/doctors/' + keyFind;
    if (clinicId !== '' && specialtyId !== '') {
      url = url + clinicId + '/' + specialtyId;
    }
    fetch(url)
      .then(response => response.json())
      .then(res => {
        setDoctors(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Icon
            style={{marginRight: 10}}
            onPress={() => props.navigation.navigate('Home')}
            name="chevron-left"
            size={25}
            color="#c6c6c6"
          />
          <Text
            style={{fontFamily: 'SourceSansPro-SemiBoldItalic', fontSize: 20}}>
            Danh sách bác sĩ
          </Text>
        </View>
        <View style={styles.search}>
          <Icon
            style={styles.iconSearch}
            name="search"
            size={25}
            color="#c6c6c6"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Tìm kiếm"
            value={keyFind}
            onChangeText={setKeyFind}
          />
        </View>
        <View>
          {doctors.map(doctor => (
            <Fragment key={doctor.id}>
              <ListItemDoctor
                key={doctor.id}
                itemDoctor={doctor}
                props={props}
              />
            </Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  scrollView: {
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconSearch: {
    paddingTop: 10,
  },
  search: {
    flexDirection: 'row',
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  textInput: {
    width: '100%',
    color: '#c6c6c6',
    paddingLeft: 20,
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    fontSize: 20,
    color: 'black',
  },
});
