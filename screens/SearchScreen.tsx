import { StackScreenProps } from "@react-navigation/stack";
import React, { Component, useState } from "react";
import { SearchBar } from "react-native-elements";
import { RootStackParamList } from "../types";
import ResultProducts from "../components/ResultProductPage";
import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { event } from "react-native-reanimated";


export default function SearchScreen() {
const navigation=useNavigation();
const [search,setSearch]=useState("");

function searchresult(){

    navigation.navigate('result',{ 
    search:search
    }
    )

}

  return(
    
     <SearchBar
    searchIcon={{size:30}}
    inputStyle={{fontSize:15}}
    containerStyle={{top:40,backgroundColor: 'white'}}
    placeholder="Search...."
     platform='android'
     value={search}
     onChangeText={(event)=>{setSearch(event)}}
     showLoading={true}
     onSubmitEditing={searchresult}
   />
  );
  

}

