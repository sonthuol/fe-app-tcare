import React, {useState, useEffect, Fragment} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {slideClinic} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import ListItemSpecialty from '../components/ListItemSpecialty';
import ListItemDoctor from '../components/ListItemDoctor';
import {windowWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
const ScheduleScreen = props => {
  const [optionTab, setOptionTab] = useState(1);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [patientAsyncStorage, setPatientAsyncStorage] = useState([]);
  const onSelectSwitch = value => {
    setOptionTab(value);
  };
  // Passing configuration object to axios
  useEffect(() => {
    getAllMedicalRecordWithStatusWaitingConfirm();
    getAsyncStorage();
  }, [patientId, optionTab]);

  function getAsyncStorage() {
    AsyncStorage.getItem('profilePatient', (err, result) => {
      result = JSON.parse(result);
      setPatientAsyncStorage(result);
      setPatientId(result.id);
    });
  }

  function getAllMedicalRecordWithStatusWaitingConfirm() {
    let url =
      'http://10.0.2.2:8080/api/medical-records/get-all-medical-record-with-waiting-confirm/' +
      patientId +
      '?status=' +
      optionTab;
    fetch(url)
      .then(response => response.json())
      .then(res => {
        setMedicalRecords(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text
          style={{fontFamily: 'SourceSansPro-SemiBoldItalic', fontSize: 25}}>
          Hồ sơ khám bệnh
        </Text>
      </View>
      <View
        style={{
          paddingTop: 20,
          paddingLeft: 20,
        }}>
        <CustomSwitch
          selectionMode={1}
          option1="Chờ xác nhận"
          option2="Đã xác nhận"
          option3="Đã khám"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {optionTab == 1 && (
          <View>
            {medicalRecords.map(medicalRecord => (
              <View style={styles.viewCard} key={medicalRecord.id}>
                <TouchableOpacity style={styles.card}>
                  <Text style={styles.textTitle}>
                    Mã khám bệnh: {medicalRecord.id}
                  </Text>
                  <Text style={styles.textTitle}>
                    {medicalRecord.schedules.map(schedule => (
                      <Fragment key={schedule.id}>
                        Ngày khám:{schedule.day}
                      </Fragment>
                    ))}
                  </Text>
                  <Text style={styles.textTitle}>
                    {medicalRecord.schedules.map(schedule => (
                      <Fragment key={schedule.id}>
                        Giờ khám: {schedule.time}
                      </Fragment>
                    ))}
                  </Text>
                  <Text style={styles.textTitleReadMore}>Xem chi tiết</Text>
                  <Icon
                    style={styles.textIconReadMore}
                    name="angle-double-down"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        {optionTab == 2 && (
          <View>
            {medicalRecords.map(medicalRecord => (
              <View style={styles.viewCard} key={medicalRecord.id}>
                <TouchableOpacity style={styles.card}>
                  <Text style={styles.textTitle}>
                    Mã khám bệnh: {medicalRecord.id}
                  </Text>
                  <Text style={styles.textTitle}>
                    {medicalRecord.schedules.map(schedule => (
                      <Fragment key={schedule.id}>
                        Ngày khám:{schedule.day}
                      </Fragment>
                    ))}
                  </Text>
                  <Text style={styles.textTitle}>
                    {medicalRecord.schedules.map(schedule => (
                      <Fragment key={schedule.id}>
                        Giờ khám: {schedule.time}
                      </Fragment>
                    ))}
                  </Text>
                  <Text style={styles.textTitleReadMore}>Xem chi tiết</Text>
                  <Icon
                    style={styles.textIconReadMore}
                    name="angle-double-down"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        {optionTab == 3 && (
          <View>
            {medicalRecords.map(medicalRecord => (
              <View style={styles.viewCard} key={medicalRecord.id}>
                <TouchableOpacity style={styles.card}>
                  <Text style={styles.textTitle}>
                    Mã khám bệnh: {medicalRecord.id}
                  </Text>
                  <Text style={styles.textTitle}>
                    {medicalRecord.schedules.map(schedule => (
                      <Fragment key={schedule.id}>
                        Ngày khám:{schedule.day}
                      </Fragment>
                    ))}
                  </Text>
                  <Text style={styles.textTitle}>
                    {medicalRecord.schedules.map(schedule => (
                      <Fragment key={schedule.id}>
                        Giờ khám: {schedule.time}
                      </Fragment>
                    ))}
                  </Text>
                  <Text style={styles.textTitleReadMore}>Xem chi tiết</Text>
                  <Icon
                    style={styles.textIconReadMore}
                    name="angle-double-down"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

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
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 20,
  },
  viewCard: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  card: {
    backgroundColor: '#0aada8',
    padding: 20,
    width: 350,
    height: 130,
    borderRadius: 10,
  },
  textTitle: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    fontSize: 14,
  },
  textTitleReadMore: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  textIconReadMore: {
    color: '#fff',
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    fontSize: 16,
    textAlign: 'center',
  },
});
