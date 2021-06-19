import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
// style
import primaryColor from '../styles/style';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
// components
import Carousel from './Carousel';



const HomePage=({ navigation }:StackScreenProps<RootStackParamList>)=>{
function renderHeader(){
 return(
  // top notification section of the phone
 <View style={styles.screenTop}>
  <View>
  </View>
  <View style={{marginTop:40,flexDirection:'row', height:80,backgroundColor:primaryColor}}>
  <Ionicons style={{marginLeft:10 }} name="menu" size={32} color="black" />
 <Text style={{marginLeft:100,fontSize:20,color:'white', textAlign:'center'}}>Greenad</Text>
 <Ionicons style={{ marginLeft:100 }} name="md-cart" size={24} color="black" />
  </View>
 </View>);
}
  return(
<View style={styles.container}>
{renderHeader()}
<View style={{marginTop:25,flexDirection:'row',backgroundColor:primaryColor}}>
   <FontAwesome name="search" style={{top:16,left:30,position:'relative',zIndex:2}} size={22} color="black" />
 <TextInput onFocus = {() => navigation.navigate('search')} placeholder="          Search..." style={{backgroundColor:'white',width:'90%', margin:7,marginLeft:0,height:40}}></TextInput>
   </View>
 <ScrollView >
 <View >
 {Carousel}
</View>
<View>
</View>
  </ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
screenTop:{marginTop:0,height:50,backgroundColor:'#43a047'},
searchBar_inputStyle:{top:-10},
 });
export default HomePage;
















