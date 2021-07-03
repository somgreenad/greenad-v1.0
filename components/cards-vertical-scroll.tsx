import React from "react";
import { View,Image,Text, ScrollView } from "react-native";
import { Badge } from "react-native-elements";

interface AppState {
  pokemonUrls: string[];
}


const pokemonArray = [
    'chikorita',
    'absol',
    'aipom',
    'amoonguss',
    'beautifly',
    'bayleef',
    'bulbasaur',
    'caterpie',
    'clefable',
    'cottonee',
    'totodile',
    'piplup',
    'ivysaur',
    'charmander',
    'squirtle',
    'wartortle',
    'rattata'
];


class VerticalScroll extends React.Component<any,AppState> {
   
    constructor(props: {}) {
        super(props);
        this.state = {
          pokemonUrls: []
        };
    }   
    
  componentDidMount() {
      
          pokemonArray.forEach(async (x,i) =>{ let f = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
let data = await f.json();
console.log(data.sprites.front_default)
this.setState({pokemonUrls:[...this.state.pokemonUrls,data.sprites.front_default]})
}); 
  }
  render(){
    return(
      <ScrollView horizontal={true} style={{marginTop:5}} >
    <View style={{flex:2,flexDirection:'row',backgroundColor:'white',overflow:'scroll',borderColor:'white'}}>
        {pokemonArray.map((x,i) => {
            console.log(x,this.state.pokemonUrls[i],'from renderx');
return Card(x,this.state.pokemonUrls[i])
})}
    </View>
    </ScrollView>)
}


}

function Card(name:string,url: string){
    return(<View style={{backgroundColor:'#4d5360',minWidth:100,borderColor:'white',paddingTop:15,borderRadius:10,borderWidth:1}}>
          <Badge value="10%off"
    status="success"
    containerStyle={{ position: 'absolute', top: 5, right: 5 }}
  />
        <Image  style={{height: 100}} source={{uri:url}}></Image>
<Text style={{padding:10,borderColor:'grey',backgroundColor:'white',borderWidth:1,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>{name}</Text>
    </View>)
}

export default VerticalScroll;