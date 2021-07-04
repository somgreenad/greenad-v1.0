import React from "react";
import { Dimensions, View,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

 const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

 const slideList = Array.from({ length: 6 }).map((V, i) => {
  return {
    id: i,
    image: `https://picsum.photos/720/400?random=${i}`,
    title: `This is the title! ${i + 1}`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

function Carousel() {
  return (
   <FlatList
      data={slideList}
      style={{ height:150}}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={true}
    /> 
  );
};


function Slide( {data}:any ) {
  return (
    <View
      style={{
        height: 100,
         width: windowWidth,
        padding:0,
        paddingTop:3,
      }}
    >
       <Image
        source={{ uri: data.image }}
        style={{ marginHorizontal:20, height:150,borderRadius:5,}}
      ></Image>     
    </View>
  );
}

export default Carousel();