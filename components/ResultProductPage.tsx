import React from 'react';
import {View,Text,StyleSheet, TextInput,Image,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import  Json from '../assets/sample.json';
// style
import primaryColor from '../styles/style';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
type RootStackParamList = {
search:String
};
type Props = RouteProp<RootStackParamList, 'search'>;
const ResultProducts=()=>{
  const arr=["fg","","","",""]
const[flag,setFlag]=useState(false)
const[cnt,setCnt]=useState(0)
const{navigate}=useNavigation();
const route=useRoute<Props>();
const{search}=route.params;

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

const v="          "
const s="helo"   
const a=v+search;


function onPressLearnMore(){
//   setFlag(!flag)
// const selectedItem=Json.info.filter(a=>a.id===id);

// if(selectedItem[0].id==id){ }gf
return(
  <View style={{flexDirection:'row'}}>
    <View style={{width:"40%"}}>
  <Button 
 onPress={(event)=>setCnt(cnt+1)}
 title="+"
 color="orange"/></View>
 <Text style={{width:"20%",alignSelf:"center",textAlign:"center"}}>
   {cnt}
 </Text>
 <View style={{width:"40%"}}><Button 
 onPress={(event)=>setCnt(cnt-1)}
 title="-"
 color="orange"/></View>
 </View>
);

}

  return(
    
<View style={styles.container}>
{renderHeader()}
<View style={{marginTop:25,flexDirection:'row',backgroundColor:primaryColor}}>
   <FontAwesome name="search" style={{top:16,left:30,position:'relative',zIndex:2}} size={22} color="black" />
 <TextInput value={a} onFocus = {() => navigate('search')} placeholder="          Search..." style={{backgroundColor:'white',width:'90%', margin:7,marginLeft:0,height:40}}></TextInput>
   </View>

<ScrollView>
{/* {
Json.info.map((item)=>{ */}
{Json.info.map((item)=>
  <TouchableWithoutFeedback key={item.id}>
<View  style={styles.scrollContainer}>
   <View style={styles.imgView}>

 <Image style={styles.tinyLogo} source={{
          uri:item.img
        }}
      />

   </View>

   <View style={styles.contentsStyle}>

     <View style={styles.textContents}>

     <Text style={styles.txtStyle}>{item.title}{'\n'}</Text>

     <Text style={styles.txt}>{5} pcs approx {1}kg{'\n'}</Text>
      
     <View style={{flexDirection:'row'}}>

      <Text>{'\n'}₹18  </Text>

     <Text style={{textDecorationLine: 'line-through'}}>{'\n'}₹20</Text>

     </View>

     </View>

     <View style={styles.btnView}>

 <Button
  onPress={onPressLearnMore}
  title="ADD"
  color="orange"/> 
{onPressLearnMore}
 
</View>
    </View>
    </View>
    </TouchableWithoutFeedback>


)
}


      




</ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  txt:{
    borderRadius:10,
    backgroundColor:'lightgrey',
    height:20,
  },
  
  txtStyle:{
    fontSize: 16,
    fontWeight: "bold",
    alignItems:'flex-start'
  },
  textContents:{

paddingBottom: 4,
top:-5,
left:-15,
marginLeft:10,


  },
  contentsStyle:{
left:20,
borderBottomWidth: 5,
padding:10,
    top:4,
    width:"50%",
    height:"95%",
    borderColor:'white',
  },btnView:{
    top:4,
  },
  imgView:{
    left:10,
    top:6,
    width:"45%",
    height:"80%",
    elevation:2,
    borderColor:'white',
  },
  scrollContainer:{
    flex:1,
flexDirection:'row',
    height:200,
    width:"100%",
    // alignItems:'center',
    backgroundColor:'white',
    borderWidth:0.5,
    borderColor:'lightgrey'
  },
  tinyLogo: {
    width: 140,
    height: 140,
    top:10,
    borderRadius:10,
    left:10
  },
screenTop:{marginTop:0,height:50,backgroundColor:'#43a047'},
searchBar_inputStyle:{top:-10},
 });
export default ResultProducts;
















