import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ListItem = ({item, onPress}) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: item.picture.medium,
            }}
          />
        </View>
      <View>
        <Text style={styles.title}>
          {item.name.first} {item.name.last}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  image: {
    widht: null,
    height: 80,
  },
  title: {
    fontWeight: "400",
    fontSize: 18,
  }
})

export default ListItem;
