import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import MyTab from '../navigations/MyTab';
const DashboardScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MyTab />
    </View>
  );
};

export default DashboardScreen;
