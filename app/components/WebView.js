import React, {
  Component,
  StyleSheet,
  PropTypes,
  View,
  WebView
} from 'react-native';


const propTypes = {
  url: PropTypes.string.isRequired
};

export default class Web extends Component {

  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }
}


Web.propTypes = propTypes;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  }
});
