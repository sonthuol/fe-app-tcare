import React, {useState, useEffect} from 'react';
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
  ToastAndroid,
} from 'react-native';
import ListItem from '../components/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
const BookingScreen = (props, clinicId, specialtyId) => {
  const dateSelected = props.route.params.dateSelected;
  const doctorId = props.route.params.doctorId;
  const [schedules, setSchedules] = useState([]);
  // Passing configuration object to axios
  useEffect(() => {
    // getScheduleByDoctorIdAndDate();
    let url =
      'http://10.0.2.2:8080/api/schedules/' + doctorId + '?day=' + dateSelected;
    fetch(url)
      .then(response => response.json())
      .then(res => {
        setSchedules(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Icon
          onPress={() =>
            props.navigation.navigate('Doctor', {clinicId, specialtyId})
          }
          name="chevron-left"
          size={25}
          color="#fff"
        />
        <Image
          source={require('../images/PGS.TS-TRAN-MINH-DIEN-2.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            marginRight: 10,
            marginLeft: 20,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontFamily: 'SourceSansPro-SemiBoldItalic',
            color: '#fff',
            fontSize: 18,
          }}>
          Ths.BS Lê Anh Tuấn
        </Text>
      </View>
      <View style={styles.containerBooking}>
        <View style={{marginTop: 20}}></View>
        <View>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('CalendarDoctor', {doctorId: doctorId})
            }>
            <Text style={styles.titleTextInput}>Ngày khám *</Text>
            <View style={styles.containerInput}>
              <Icon style={styles.iconInput} name="calendar" size={22} />
              <TextInput
                style={styles.inputText}
                placeholder="Chọn ngày khám"
                editable={false}
                value={dateSelected}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.hourBookingMorning}>
          <Text style={styles.titleTextInput}>Giờ khám</Text>
          {schedules.map(schedule => (
            <View style={styles.buttonHourBooking} key={schedule.id}>
              <Button
                title={schedule.time}
                color={schedule.status == 1 ? '#0aada8' : '#0C5776'}
                disabled={schedule.status == false}
                onPress={() => {
                  if (schedule.status == 1) {
                    props.navigation.navigate('CreateMedicalRecords', {
                      doctorId,
                      dateSelected,
                      scheduleId: schedule.id,
                    });
                  } else {
                    ToastAndroid.show(
                      'Lịch khám đã được đặt',
                      ToastAndroid.SHORT,
                    );
                  }
                }}
              />
            </View>
          ))}
        </View>
        <View style={styles.noteStatusBookingEmpty}>
          <Button title="" color="#0aada8" disabled />
          <Text style={styles.titleTextInputNote}>Ngoài giò khám</Text>
        </View>
        <View style={styles.noteStatusBookingNotEmpty}>
          <Button title="" color="#0aada8" />
          <Text style={styles.titleTextInputNote}>Trống</Text>
        </View>
        <View style={styles.noteStatusBookingRecord}>
          <Button title="" color="#0C5776" />
          <Text style={styles.titleTextInputNote}>Đã được đặt</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0aada8',
    paddingLeft: 20,
  },
  containerBooking: {
    flex: 1,
    alignItems: 'center',
  },
  containerInput: {
    height: 60,
    borderRadius: 15,
    marginVertical: 5,
    borderWidth: 3.5,
    borderColor: '#0aada8',
    flexDirection: 'row',
  },
  iconInput: {
    paddingLeft: 20,
    paddingTop: 15,
    color: '#0aada8',
  },
  inputText: {
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    width: '80%',
    marginLeft: 5,
    fontSize: 18,
  },
  titleTextInput: {
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBoldItalic',
  },
  titleTextInputNote: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'SourceSansPro-SemiBoldItalic',
  },
  hourBookingMorning: {
    width: '90%',
    position: 'absolute',
    top: 105,
    marginVertical: 8,
  },
  buttonHourBooking: {
    width: '50%',
    height: 40,
    borderRadius: 20,
    marginVertical: 6,
    justifyContent: 'center',
  },
  noteStatusBookingEmpty: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    position: 'absolute',
    top: 140,
    left: 250,
  },
  noteStatusBookingNotEmpty: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    position: 'absolute',
    top: 192,
    left: 250,
  },
  noteStatusBookingRecord: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    position: 'absolute',
    top: 244,
    left: 250,
  },
});
