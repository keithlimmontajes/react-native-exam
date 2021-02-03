import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const LIST = [
  {
    title: 'sample',
    id: 1,
    name: 'keith montajes',
    age: 16,
    contact: '09203251231261',
  },
  {
    title: 'sample 2',
    id: 2,
    name: 'darna ong',
    age: 15,
    contact: '09203251231261',
  },
   {
    title: 'sample 3',
    id: 2,
    name: 'darna ong',
    age: 15,
    contact: '09203251231261',
  },
   {
    title: 'sample 4',
    id: 2,
    name: 'darna ong',
    age: 15,
    contact: '09203251231261',
  },
   {
    title: 'sample 5',
    id: 2,
    name: 'darna ong',
    age: 15,
    contact: '09203251231261',
  },
];

const App: () => React$Node = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    persistentData();
    getPersistdata();
  });

  const persistentData = async () => {
    await AsyncStorage.setItem('LIST', JSON.stringify(LIST));
  };

  const getPersistdata = async () => {
    const item = await AsyncStorage.getItem('LIST');
    setData(JSON.parse(item))
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.divMain}>
        <View style={{ flex: 1}}>
          <Text style={{ color: "blue", fontSize: 20}}>{item.title}</Text>
        </View>
        <View style={{marginRight: 15, flex: 1}}>
          <Text style={{ color: "black", fontSize: 20}}>{item.age}</Text>
        </View>
        <View style={{}}>
          <Text style={{ color: "black", fontSize: 20}}>{item.contact}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View>
              <Text>List Environment</Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  divMain: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
  },
});

export default App;
