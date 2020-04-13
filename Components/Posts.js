
import React, { useEffect, useState } from 'react';
import {Image, FlatList, StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import axios from 'axios';



export default function Posts({ navigation }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => setPosts(response.data))
        .catch((error) => console.error(error))
    }, []);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Post', { id: item.id })}
            >
              <Image style={styles.Image} source={{ uri: 'https://source.unsplash.com/random/' + item.id }} resizeMode='stretch' />
              <Text > {item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id + ""}
          extraData={posts}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
    },
   
    Image: {
        margin: 5,
        borderRadius: 30,
        width:300,

      },
  });