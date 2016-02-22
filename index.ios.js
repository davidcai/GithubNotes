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
        <View style={[styles.item, styles.item1]}><Text>1</Text></View>
        <View style={[styles.item, styles.item2]}><Text>2</Text></View>
        <View style={[styles.item, styles.item3]}><Text>3</Text></View>
        <View style={[styles.item, styles.item4]}><Text>4</Text></View>
        <View style={[styles.item, styles.item5]}><Text>5</Text></View>
        <View style={[styles.item, styles.item6]}><Text>6</Text></View>
        <View style={[styles.item, styles.item7]}><Text>7</Text></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,

    // flexDirection: 'row',
    // flexDirection: 'column',

    // justifyContent: 'flex-start',
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',

    alignItems: 'flex-start',
    // alignItems: 'center',
    // alignItems: 'flex-end',
    // alignItems: 'stretch',

    flexWrap: 'wrap',
    // flexWrap: 'nowrap'
  },

  item: {
    padding: 15,
    margin: 2,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  item1: {
    backgroundColor: '#bada55'
  },
  item2: {
    backgroundColor: '#ff75aa',
    paddingTop: 30,
    paddingRight: 50,
    paddingBottom: 40,
    paddingLeft: 20
  },
  item3: {
    backgroundColor: '#ffeb3b',
    // alignSelf: 'flex-start',
    // alignSelf: 'center',
    // alignSelf: 'flex-end',
    // alignSelf: 'stretch'
  },
  item4: {
    backgroundColor: '#67b1fc',
    // flex: 1
  },
  item5: {
    backgroundColor: '#c08ed1',
    padding: 20
  },
  item6: {
    backgroundColor: '#74edd8',
    padding: 50
  },
  item7: {
    backgroundColor: '#ffa25b'
  }
});


AppRegistry.registerComponent('GithubNotes', () => GithubNotes);
