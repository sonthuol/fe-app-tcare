import React, {useState} from 'react';
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
import ListItem from '../components/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['vi'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ],
  dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
};
LocaleConfig.defaultLocale = 'vi';

const CalendarDoctorScreen = props => {
  const [dateSelected, setDateSelected] = useState('');

  const onPressDateSelected = e => {
    // console.log(e.dateString);
    props.navigation.navigate('Booking', {
      dateSelected: e.dateString,
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Icon
          onPress={() => props.navigation.navigate('Booking')}
          name="chevron-left"
          size={25}
          color="#fff"
        />
        <Text
          style={{
            fontFamily: 'SourceSansPro-SemiBoldItalic',
            color: '#fff',
            fontSize: 18,
            paddingLeft: 30,
          }}>
          Chọn ngày khám
        </Text>
      </View>
      <View>
        <Calendar
          markedDates={{
            '2022-05-03': {
              selected: true,
              selectedColor: '#0aada8',
            },
          }}
          minDate={new Date()}
          onDayPress={e => onPressDateSelected(e)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarDoctorScreen;

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
});
