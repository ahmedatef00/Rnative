
import React, { useEffect, useState } from 'react';
import {Image,StyleSheet, Text, View} from 'react-native';
import axios from 'axios';





export default function Post({ route }) {
    const [post, setPost] = useState({});
    const imgUri = "https://source.unsplash.com/random/"

    console.log(post.id);
    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/posts/' + route.params.id)
        .then((response) => setPost(response.data))
        .catch((error) => console.error(error))
    }, []);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.Image}
         source={{ uri: imgUri+post.id }} 
         />
        <Text>Title :   {post.title}</Text>
        <Text>Body  :  {post.body}</Text>
      </View>
     
    );
  }
  const styles = StyleSheet.create({
      Text:{fontSize:24 ,fontWeight:"bold"},
    Image: {
        margin: 5,
        borderRadius: 30,
        width: 200, height: 200 ,

      },
  
  });
  
