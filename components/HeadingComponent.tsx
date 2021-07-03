import React from "react";
import { View,Text } from "react-native";
import primaryColor from '../styles/style';

 interface property{
    name:string
}


 export default function Heading(text : string){
    return(
        <View style={{}}>
  <Text style={{fontSize:20,fontWeight:"700",borderWidth:2,color:'grey',borderColor:'white',
  borderBottomColor:'green',borderRightColor:'green',borderRightWidth:5,padding:5,paddingLeft:10,margin:3,marginBottom:0}} >{text}</Text>
   <View
          style={{
            height:0,
            width:0,
            position:'absolute',
            top:3,
            right:0,
            borderTopColor:'white',
            borderLeftColor:primaryColor,
            borderTopWidth:30,
            borderLeftWidth:30,
          }}
          ></View>
          <View
          style={{
            height:0,
            width:0,
            position:'absolute',
            top:3,
            right:0,
            borderTopColor:'white',
            borderLeftColor:'green',
            borderTopWidth:20,
            borderLeftWidth:20,
          }}
          ></View>
  
</View>
    )
}
