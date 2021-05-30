import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Constant from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

const HomePage=()=>{
function renderHeader(){
  return(
  <View style={{marginTop:0,height:40,backgroundColor:'green'}}>
   <View>
   </View>
   <View style={{marginTop:40,flexDirection:'row', height:50,backgroundColor:'green'}}>
   <Ionicons style={{marginLeft:10 }} name="menu" size={32} color="black" />
  <Text style={{marginLeft:100,fontSize:20, textAlign:'center'}}>Greenad</Text>
  <Ionicons style={{ marginLeft:100 }} name="md-cart" size={24} color="black" />

   </View>



  </View>);
}

    return(

<View style={styles.container}>
{renderHeader()}
<View style={{marginTop:25,padding:10,backgroundColor:'green'}}>
<SearchBar
 inputStyle={{top:-10}}
 containerStyle={{top:0,height:45,backgroundColor: 'white', borderWidth: 0}}
 platform='android'
        placeholder="Search Vegetables...."
      />
      </View>
  <ScrollView >
  <View >

</View>
    </ScrollView>
    
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default HomePage;