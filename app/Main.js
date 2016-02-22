import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

import api from './utils/api';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }

  handleChange(e) {
    this.setState({
      username: e.nativeEvent.text
    });
  }

  handleResponse(res) {
    if (res.message === 'Not Found') {
      this.setState({
        error: 'User not found',
        isLoading: false
      });
    } else {
      this.setState({
        isLoading: false,
        error: false,
        username: ''
      });
    }
  }

  handleSubmit() {
    this.setState({
      isLoading: true,
    });

    api.getBio(this.state.username)
      .then((jsonRes) => this.handleResponse(jsonRes))
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: `There was an error: ${err}`
        });
      })
  }

  render() {
    const showErr = (
      this.state.error ? <Text style={styles.error}> {this.state.error} </Text> : <View></View>
    );

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Search for a Github User
        </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="white">
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"
        />
        {showErr}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  error: {
    color: '#AF1F1E',
    textAlign: 'center'
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
