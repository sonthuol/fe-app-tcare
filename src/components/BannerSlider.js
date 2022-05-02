import {View, Image, Text} from 'react-native';
import React from 'react';

export default function BannerSlider({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 10}}
      />
      {/* <Text style={{textAlign: 'center', fontSize: 15, color: 'black'}}>
        {data.title}
      </Text> */}
    </View>
  );
}
