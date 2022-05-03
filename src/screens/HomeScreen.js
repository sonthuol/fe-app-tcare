import React, {useState} from 'react';
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
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {slideClinic} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import {windowWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = props => {
  const [carousel, setCarousel] = useState(null);
  const [optionTab, setOptionTab] = useState(1);
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
            Hello, Sơn Thươl
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
            onPress={() => props.navigation.navigate('Doctor')}
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
            onPress={() => props.navigation.navigate('Specialty')}
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
            <View
              style={{
                marginVertical: 3,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItem: 'center',
              }}>
              <View
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
                  <Text style={{fontFamily: 'SourceSansPro-SemiBoldItalic'}}>
                    Phòng khám Nguyễn Văn A
                  </Text>
                  <Text style={{fontFamily: 'SourceSansPro-SemiBoldItalic'}}>
                    TP. Hồ Chí Minh
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
                    fontFamily: 'SourceSansPro-SemiBoldItalic',
                    fontSize: 14,
                  }}>
                  Đặt khám
                </Text>
              </TouchableOpacity>
            </View>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </View>
        )}
        {optionTab == 2 && (
          <View>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </View>
        )}
        {optionTab == 3 && (
          <View>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
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
