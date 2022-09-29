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
const ProfileDoctorScreen = (props, clinicId, specialtyId) => {
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItem: 'center',
          backgroundColor: '#0aada8',
          height: 150,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <Image
            source={require('../images/PGS.TS-TRAN-MINH-DIEN-2.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginLeft: 10,
              resizeMode: 'contain',
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                color: '#fff',
                fontSize: 18,
              }}>
              Ths.BS
            </Text>
            <Text
              style={{
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                color: '#fff',
                fontSize: 25,
              }}>
              Lê Anh Tuấn
            </Text>
            <Text
              style={{
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                color: '#fff',
                fontSize: 18,
              }}>
              Răng Hàm Mặt
            </Text>
            <Text
              style={{
                fontFamily: 'SourceSansPro-SemiBoldItalic',
                color: '#fff',
                fontSize: 18,
              }}>
              Phòng khám Nguyễn Văn A
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{padding: 30}}>
          <View>
            <Text style={styles.textDescriptionTitle}>
              Bác sĩ Nguyễn Thy Nga
            </Text>
            <Text style={styles.textDescription}>
              Thế mạnh về Chỉnh hình Răng Hàm Mặt
            </Text>
            <Text style={styles.textDescription}>
              Tốt nghiệp Chuyên ngành Răng Hàm Mặt, Đại học First Moscow State
              Medical, Nga
            </Text>
            <Text style={styles.textDescriptionTitle}>Quá trình công tác</Text>
            <Text style={styles.textDescription}>
              Nguyên Bác sĩ Chuyên khoa Răng Hàm Mặt - Bệnh viện Đa khoa Đức
              Giang
            </Text>
            <Text style={styles.textDescription}>
              Bác sĩ khám và điều trị Chuyên khoa Răng Hàm Mặt, Phòng khám Nha
              khoa Công nghệ cao 360
            </Text>
            <Text style={styles.textDescriptionTitle}>Quá trình đào tạo</Text>
            <Text style={styles.textDescription}>
              Tốt nghiệp Chuyên ngành Răng Hàm Mặt, Đại học First Moscow State
              Medical, Nga
            </Text>
            <Text style={styles.textDescription}>
              Tốt nghiệp Chuyên khoa Chỉnh hình Răng Hàm Mặt, Đại học Y Hà Nội
            </Text>
            <Text style={styles.textDescription}>
              Chứng chỉ Phẫu thuật tạo hình nha chu của Trung tâm Giải pháp Y
              khoa MESI
            </Text>
            <Text style={styles.textDescription}>
              Chứng chỉ Nhổ răng không sang chấn, Thẩm mỹ Veneer nâng cao.
            </Text>
            <Text style={styles.textDescriptionTitle}>Khám và điều trị</Text>
            <Text style={styles.textDescription}>
              Chỉnh nha: răng khấp khểnh, vẩu, chìa, móm,...
            </Text>
            <Text style={styles.textDescription}>
              Răng trẻ em: răng sâu, đau răng, thiếu răng, mất răng,...
            </Text>
            <Text style={styles.textDescription}>
              Thẩm mỹ răng sứ: răng nhiễm màu, răng sứt mẻ, hình thể dị dạng,...
            </Text>
            <Text style={styles.textDescription}>
              Nội nha: đau răng, răng ê buốt, răng vỡ lớn, sứt mẻ,...
            </Text>
            <Text style={styles.textDescription}>
              Phẫu thuật nha chu: cười hở lợi, tụt lợi, viêm lợi,...
            </Text>
            <Text style={styles.textDescription}>
              Tiểu phẫu: sưng đau, đau răng khôn,...
            </Text>
            <Text style={styles.textDescription}>
              Phục hình tháo lắp: mất răng nhiều ở người già
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItem: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Booking', {
              dateSelected: '2022-05-03',
            })
          }
          style={{
            position: 'absolute',
            elevation: 0,
            backgroundColor: '#0aada8',
            padding: 15,
            width: '95%',
            bottom: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'SourceSansPro-SemiBoldItalic',
              fontSize: 18,
            }}>
            Đặt khám
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileDoctorScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //   scrollView: {
  //     padding: 20,
  //   },
  container: {
    backgroundColor: '#0aada8',
    paddingLeft: 20,
    paddingTop: 20,
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
  },
  textDescriptionTitle: {
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    color: 'black',
    fontSize: 15,
  },
  textDescription: {
    fontFamily: 'SourceSansPro-SemiBoldItalic',
    color: 'black',
    fontSize: 14,
    padding: 10,
  },
});
