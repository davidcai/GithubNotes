import React, {
  Component,
  StyleSheet,
  PropTypes,
  NavigatorIOS,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import api from './utils/api';

const propTypes = {
  userInfo: PropTypes.object.isRequired
};


export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToRepos = this.goToRepos.bind(this);
    this.goToNotes = this.goToNotes.bind(this);
  }

  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile() {
  }

  goToRepos() {
  }

  goToNotes() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos}
          underlayColor="#E39EBF">
          <Text style={styles.buttonText}>View Repositories</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes}
          underlayColor="#9BAAF3">
          <Text style={styles.buttonText}>Take Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Dashboard.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});
