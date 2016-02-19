import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';


class GithubNotes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}><Text>Box 1</Text></View>
        <View style={styles.box}><Text>Box 2</Text></View>
        <View style={styles.box}><Text>Box 3</Text></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


AppRegistry.registerComponent('GithubNotes', () => GithubNotes);
