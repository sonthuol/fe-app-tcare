import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ClinicScreen from '../screens/ClinicScreen';
import DoctorScreen from '../screens/DoctorScreen';
import ScheduleDoctorScreen from '../screens/ScheduleDoctorScreen';
import BookingScreen from '../screens/BookingScreen';
import CreateMedicalRecordsScreen from '../screens/CreateMedicalRecordsScreen';
import ProfileDoctorScreen from '../screens/ProfileDoctorScreen';
import CalendarDoctorScreen from '../screens/CalendarDoctorScreen';
import SpecialtyScreen from '../screens/SpecialtyScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import MyTab from '../navigations/MyTab';
const Stack = createNativeStackNavigator();

const MyStack = props => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={MyTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Specialty"
        component={SpecialtyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Clinic"
        component={ClinicScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Doctor"
        component={DoctorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScheduleDoctor"
        component={ScheduleDoctorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileDoctor"
        component={ProfileDoctorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CalendarDoctor"
        component={CalendarDoctorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateMedicalRecords"
        component={CreateMedicalRecordsScreen}
        options={({headerShown: true}, {title: 'Tạo hồ sơ khám bệnh'})}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
