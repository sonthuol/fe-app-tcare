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
const DoctorScreen = props => {
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
          <TextInput style={styles.textInput} placeholder="Tìm kiếm" />
        </View>
        <View
          style={{
            marginVertical: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItem: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileDoctor')}
              style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Image
                source={require('../images/imageProfile.jpg')}
                style={{
                  width: 55,
                  height: 50,
                  borderRadius: 10,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: 'SourceSansPro-SemiBoldItalic',
                  }}>
                  Nguyễn Văn A
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'SourceSansPro-SemiBoldItalic',
                  }}>
                  Răng hàm mặt
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Booking', {
                dateSelected: '2022-05-03',
              })
            }
            style={{
              backgroundColor: '#0aada8',
              padding: 13,
              width: 90,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'SourceSansPro-SemiBoldItalicItalic',
                fontSize: 14,
              }}>
              Đặt khám
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItem: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Image
              source={require('../images/imageProfile.jpg')}
              style={{
                width: 55,
                height: 50,
                borderRadius: 10,
                marginRight: 8,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontFamily: 'SourceSansPro-SemiBoldItalic',
                }}>
                Nguyễn Văn B
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'SourceSansPro-SemiBoldItalic',
                }}>
                Nhi khoa
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Specialty')}
            style={{
              backgroundColor: '#0aada8',
              padding: 13,
              width: 90,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'SourceSansPro-SemiBoldItalicItalic',
                fontSize: 14,
              }}>
              Đặt khám
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItem: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Image
              source={require('../images/imageProfile.jpg')}
              style={{
                width: 55,
                height: 50,
                borderRadius: 10,
                marginRight: 8,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontFamily: 'SourceSansPro-SemiBoldItalic',
                }}>
                Nguyễn Văn C
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'SourceSansPro-SemiBoldItalic',
                }}>
                Xương khớp
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Specialty')}
            style={{
              backgroundColor: '#0aada8',
              padding: 13,
              width: 90,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'SourceSansPro-SemiBoldItalicItalic',
                fontSize: 14,
              }}>
              Đặt khám
            </Text>
          </TouchableOpacity>
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
