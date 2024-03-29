import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ListItem({itemClinic, props, clinicId}) {
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
          source={{uri: itemClinic.image}}
          style={{
            width: 55,
            height: 50,
            borderRadius: 10,
            marginRight: 8,
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: 'SourceSansPro-SemiBoldItalic',
              width: 200,
              fontSize: 13,
            }}>
            {itemClinic.name}
          </Text>
          <Text
            style={{
              fontFamily: 'SourceSansPro-SemiBoldItalic',
              fontSize: 10,
              width: 200,
            }}>
            {itemClinic.address}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Specialty', {clinicId})}
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
  );
}
