import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

//Services
import {fetchUsers} from '../../services/users';

//Components
import ListItem from '../../components/ListItem';
import ScreenTitle from '../../components/ScreenTitle';

const HomeScreen = ({ navigation }) => {
  const [list, setList] = useState([]);

  const fetch = async () => {
    const result = await fetchUsers();
    console.log('[HomeScreen] result', result);
    if (result.status == 200) {
      setList([...result.data.results]);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const moveToDetails = (item) => {
    console.log('moveToDetails', item);
    navigation.navigate('Details', {item})
  }

  return (
    <View style={styles.container}>
      <ScreenTitle>Home Screen</ScreenTitle>
      <View style={styles.list}>
      {list.length > 0 &&
        list.map(item => {
          return <ListItem 
          key={item.id}
          item={item} 
          onPress={() => moveToDetails(item)}
          />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    margin: 10,
  }
})
export default HomeScreen;
