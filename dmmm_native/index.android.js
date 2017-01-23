/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

var html = `
  <!DOCTYPE html>\n
  <html>
  <head></head>
  <body>
  <div>Hello there matey!!!!</div>
  <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/5CLFwCUyWqY?autoplay=1" frameborder="0" allowfullscreen/>
  </body>
  </html>
`;

class dmmm_native extends Component {
  render() {
    /*
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to THE APP Angus
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Text>
          Some more TEXT
        </Text>
      </View>
    );
    */
    return (
        <WebView
          source={{
            html: html
          }}
          scalesPageToFit={true}
          style={{
            backgroundColor: '#ff0000',
            height: 100,
          }}
          mediaPlaybackRequiresUserAction={false}
        />
    );
  }
}

/*
<View style={styles.container}>
  <Text style={styles.welcome}>
    Welcome to THE APP there
  </Text>
  <Text style={styles.instructions}>
    To get started, edit index.android.js
  </Text>
  <Text style={styles.instructions}>
    Shake or press menu button for dev menu
  </Text>
  <Text>
    Some more TEXT
  </Text>

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dmmm_native', () => dmmm_native);
