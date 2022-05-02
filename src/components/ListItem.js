import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ListItem(props) {
  return (
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
          style={{width: 55, height: 50, borderRadius: 10, marginRight: 8}}
        />
        <View>
          <Text>Phòng khám Nguyễn Văn A</Text>
          <Text>TP. Hồ Chí Minh</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Register')}
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
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          Đặt khám
        </Text>
      </TouchableOpacity>
    </View>
  );
}
