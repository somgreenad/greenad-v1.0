import React from "react";
import { View,Image,Text, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import Heading from "../components/HeadingComponent";
import Json from "../assets/sample.json";
import primaryColor from "../styles/style";
import { useNavigation } from "@react-navigation/native";

export default function weeklyPackScreen() {
    const nav = useNavigation();

    let width = Dimensions.get('window').width;
    return(
        <SafeAreaView>
    <ScrollView style={{backgroundColor:"#ebedf0",marginTop:70}} >
    <View >
        
        {Heading('Weekly Pack')}


<View style={{
        flex:1,
      
       flexWrap:'wrap',
        flexDirection:'row',
        backgroundColor:'white',
        paddingVertical:10
      }}>
        {Json.info.map((item,i)=>{
     return Card(item.title,item.img,1) 
    })}
      </View>
      
    

      <TouchableOpacity onPress={() => {nav.navigate('Home')}}
      style={{backgroundColor:primaryColor,paddingHorizontal:5,marginBottom:20, width:width}}>
  <View>
    <Text style={{padding:10,color:'white',fontSize:18, marginLeft:(width/2)-40}}>Back</Text>
  </View>
</TouchableOpacity>
    </View> 
    
    </ScrollView>
    </SafeAreaView>)
}

function Card(name:string,url: string,quantity: number){
    return(<View  style={{backgroundColor:primaryColor,width:'50%',borderColor:'white',paddingTop:5,borderRadius:10,borderWidth:1}}>
<Text style={{color:'white',padding:3}}>{name}</Text>
        <Image  style={{height: 100}} source={{uri:url}}></Image>
<Text style={{padding:10,borderColor:'grey',backgroundColor:'white',borderWidth:1,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>{quantity} Kg</Text>
    </View>)

   
}