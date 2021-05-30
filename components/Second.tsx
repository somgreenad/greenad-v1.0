import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Second=()=>{
    return(
<View style={styles.container}>
    <Text>

        contents second
    </Text>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Second;