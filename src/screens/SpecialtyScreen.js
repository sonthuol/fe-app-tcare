import React, {useState, useEffect} from 'react';
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
import ListItemSpecialty from '../components/ListItemSpecialty';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
const SpecialtyScreen = props => {
  const [specialties, setSpecialties] = useState([]);
  const [url, setUrl] = useState(
    'http://10.0.2.2:8080/api/public/specialties/',
  );
  const [clinicId, setClinicId] = useState(props.route.params.clinicId);

  // Passing configuration object to axios
  useEffect(() => {
    getAllSpecialties();
  }, []);

  function getAllSpecialties() {
    fetch(url + clinicId)
      .then(response => response.json())
      .then(res => {
        setSpecialties(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
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
            Danh sách chuyên khoa
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
        <View>
          {specialties.map(specialty => (
            <>
              <ListItemSpecialty
                itemSpecialty={specialty}
                props={props}
                clinicId={clinicId}
                specialtyId={specialty.id}
              />
            </>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialtyScreen;

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
  },
});
