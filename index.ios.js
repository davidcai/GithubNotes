import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Main from './app/Main';


class GithubNotes extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notes',
          component: Main,
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});


AppRegistry.registerComponent('GithubNotes', () => GithubNotes);
