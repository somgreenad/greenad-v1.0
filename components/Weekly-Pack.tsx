import React from "react";
import { View,Image,Text, Dimensions, TouchableOpacity } from "react-native";
import Heading from "./HeadingComponent";
import Json from "../assets/sample.json";
import primaryColor from "../styles/style";
import { useNavigation } from "@react-navigation/native";

export default function weeklyPack() {

    let width = Dimensions.get('window').width;
    const navigation=useNavigation();
    return(<View >
        
        {Heading('Weekly Pack')}

<View style={{
        flex:1,
       height:'100%',
       flexWrap:'wrap',
        flexDirection:'row',
        backgroundColor:'white',
        paddingVertical:10
      }}>
        {Json.info.map((item,i)=>{
        console.log(item.title);
     return compressedView(item.img);
      //  Card(item.title,item.img,1)
    
     
    })}
    <View style={{
          position:'absolute',
          right:5,
          bottom:12,
          width:170,
          height:65,
          borderRadius:9,
          backgroundColor:'#f80534',
          padding:7
      }}> 
     <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Buy as bundle and save More</Text> 
      </View>
      </View>
      
    

      <TouchableOpacity onPress={() => {navigation.navigate('weekPack')}}
      style={{backgroundColor:primaryColor,paddingHorizontal:5,marginBottom:20, width:'100%'}}>
  <View>
    <Text style={{padding:10,color:'white',fontSize:18, marginLeft:(width/2)-60}}>See More</Text>
  </View>
</TouchableOpacity>
    </View> )
}

function Card(name:string,url: string,quantity: number){
    return(<View  style={{backgroundColor:primaryColor,height:'fit-content',width:'50%',borderColor:'white',paddingTop:5,borderRadius:10,borderWidth:1}}>
<Text style={{color:'white'}}>{name}</Text>
        <Image  style={{height: 100}} source={{uri:url}}></Image>
<Text style={{padding:10,borderColor:'grey',backgroundColor:'white',borderWidth:1,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>{quantity} Kg</Text>
    </View>)

   
}

 function compressedView(url:string){
     let width = Dimensions.get('window').width;
     return(   <Image source={{uri:url}} style={{height:(width/5),width:(width/4),borderColor:'grey',borderWidth:1,padding:0,margin:0}}></Image>);
    }

