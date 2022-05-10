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
const BookingScreen = props => {
  const {dateSelected} = props.route.params;
  console.log(dateSelected);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Icon
          onPress={() => props.navigation.navigate('Doctor')}
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
            onPress={() => props.navigation.navigate('CalendarDoctor')}>
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
});
