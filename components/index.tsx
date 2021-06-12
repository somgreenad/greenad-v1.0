import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HomePage from './HomePage';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import { NavigationContainer } from '@react-navigation/native';



const Tab=createBottomTabNavigator();
const st=createStackNavigator();
const MainPage=()=>{
return(
  
    <NavigationContainer >
    <Tab.Navigator initialRouteName="Home"
tabBarOptions={{activeTintColor:'white',inactiveTintColor:'black' ,activeBackgroundColor:'#295F2D',inactiveBackgroundColor:'green'}}

      >
   
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        title:'Home',
        
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={24} color="black" />
        ),
       
      }}
    />
    <Tab.Screen
      name="d"
      component={Second}
      options={{
        tabBarLabel: 'My Orders',
       
        tabBarIcon: ({color}) => (
            <Fontisto name="shopping-basket" size={24} color="black" />
        ),
      }}
    />
    
    <Tab.Screen
      name="Explore"
      component={Fourth}
      options={{
        tabBarLabel: 'Favourites',
      
        tabBarIcon: ({color}) => (
<Ionicons name="heart-sharp" size={24} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
  </NavigationContainer>);
}
const style=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignContent:'center',
        width:100,
        height:100
    }
});
export default MainPage;

