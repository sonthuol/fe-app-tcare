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
const HomeScreen = props => {
  const [clinics, setClinics] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [carousel, setCarousel] = useState(null);
  const [optionTab, setOptionTab] = useState(1);
  const [clinicId, setClinicId] = useState('');
  const [specialtyId, setSpecialtyId] = useState('');
  const [patientAsyncStorage, setPatientAsyncStorage] = useState([]);

  // Passing configuration object to axios
  useEffect(() => {
    getAllClinics();
    getAllSpecialties();
    getAllDoctors();
    getAsyncStorage();
  }, []);

  function getAsyncStorage() {
    AsyncStorage.getItem('profilePatient', (err, result) => {
      result = JSON.parse(result);
      setPatientAsyncStorage(result);
    });
  }

  function getAllClinics() {
    fetch('http://10.0.2.2:8080/api/public/clinics')
      .then(response => response.json())
      .then(res => {
        setClinics(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function getAllSpecialties() {
    fetch('http://10.0.2.2:8080/api/public/specialties')
      .then(response => response.json())
      .then(res => {
        setSpecialties(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function getAllDoctors() {
    fetch('http://10.0.2.2:8080/api/public/doctors')
      .then(response => response.json())
      .then(res => {
        setDoctors(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  const renderBanner = ({index, item}) => {
    return <BannerSlider data={item} />;
  };
  const onSelectSwitch = value => {
    setOptionTab(value);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text
            style={{fontFamily: 'SourceSansPro-SemiBoldItalic', fontSize: 25}}>
            Hello, {patientAsyncStorage.name}
          </Text>
          <ImageBackground
            source={require('../images/imageProfile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItem: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Doctor', {clinicId, specialtyId})
            }
            style={{
              backgroundColor: '#001C44',
              padding: 13,
              width: 100,
              borderRadius: 10,
            }}>
            <IconFontisto
              style={{
                textAlign: 'center',
                color: '#fff',
                marginBottom: 5,
              }}
              name="doctor"
              size={30}
              color="#c6c6c6"
            />
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                fontSize: 14,
              }}>
              Đặt khám bác sĩ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Specialty', {clinicId})}
            style={{
              backgroundColor: '#0C5776',
              padding: 13,
              width: 100,
              borderRadius: 10,
            }}>
            <Icon
              style={{
                textAlign: 'center',
                color: '#fff',
                marginBottom: 5,
              }}
              name="stethoscope"
              size={30}
              color="#c6c6c6"
            />
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                fontSize: 13,
              }}>
              Đặt khám chuyên khoa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Clinic')}
            style={{
              backgroundColor: '#2D99AE',
              padding: 13,
              width: 100,
              borderRadius: 10,
            }}>
            <Icon
              style={{
                textAlign: 'center',
                color: '#fff',
                marginBottom: 5,
              }}
              name="hospital-o"
              size={30}
              color="#c6c6c6"
            />
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                fontSize: 13,
              }}>
              Đặt khám Phòng khám
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'SourceSansPro-SemiBoldItalic',
            }}>
            Phòng khám nổi bật
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: '#0aada8',
                fontFamily: 'SourceSansPro-SemiBoldItalic',
              }}>
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={c => {
            setCarousel(c);
          }}
          data={slideClinic}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View
          style={{
            marginVertical: 20,
          }}>
          <CustomSwitch
            selectionMode={1}
            option1="Phòng khám"
            option2="Chuyên khoa"
            option3="Bác sĩ"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {optionTab == 1 && (
          <View>
            {clinics.map(clinic => (
              <Fragment key={clinic.id}>
                <ListItem
                  itemClinic={clinic}
                  props={props}
                  clinicId={clinic.id}
                />
              </Fragment>
            ))}
          </View>
        )}
        {optionTab == 2 && (
          <View>
            {specialties.map(specialty => (
              <Fragment key={specialty.id}>
                <ListItemSpecialty
                  itemSpecialty={specialty}
                  props={props}
                  clinicId={specialty.clinics[0].id}
                  specialtyId={specialty.id}
                />
              </Fragment>
            ))}
          </View>
        )}
        {optionTab == 3 && (
          <View>
            {doctors.map(doctor => (
              <Fragment key={doctor.id}>
                <ListItemDoctor itemDoctor={doctor} props={props} />
              </Fragment>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    marginBottom: 10,
  },
});
