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
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import {slideClinic} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = props => {
  const [carousel, setCarousel] = useState(null);
  const renderBanner = ({index, item}) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.textBody}>Hello, Sơn Thươl</Text>
          <ImageBackground
            source={require('../images/imageProfile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
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
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              fontWeight: 'bold',
            }}>
            Phòng khám nổi bật
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>Xem tất cả</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textBody: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    // color: 'black',
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
    // paddingVertical: 6,
  },
  textInput: {
    width: '100%',
    color: '#c6c6c6',
    paddingLeft: 20,
  },
});
