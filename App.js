/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class App extends Component {
  onPress= () => Alert.alert('~ meowMe ~')

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
         <TouchableOpacity style={styles.button} onPress={this.onPress}>
           <Text style={styles.instruction}>
             tickle
           </Text>
          <Text style={styles.cat}>
            (=^.^=)
          </Text>
         </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  cat: {
    color: '#9F90CF',
    fontSize: 64,
  },
  instruction: {
    color: '#E9D8E1',
    fontSize: 36,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#B1365B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
