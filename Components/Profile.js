import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';

export default function Profile() {
    return (
      <View style={{ flex: 1, 
      justifyContent: 'center',
       alignItems: 'center' 
       }}>
        <Text style={styles.Text}>Profile</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    Text: {

      backgroundColor: '#fff',
      color:'gray',
      fontFamily:"Times New Roman",

      fontSize:50,
        
      
    }
  });
