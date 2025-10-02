import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Post from './src/components/Post.js'

const props = {titulo:'text text', url: 'https://reactnative.dev/docs/assets/p_cat2.png', resumo:'text text'}

export default function App() {
  return (
    <View style={styles.container}>
      <Post {...props}></Post>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
