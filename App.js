import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Post from './src/components/Post.js'
import {LinearGradient} from 'expo-linear-gradient';

const props = {titulo:'text text', url: 'https://reactnative.dev/docs/assets/p_cat2.png', resumo:'text text'}

export default function App() {
  return (
    <LinearGradient 
      style={styles.container}
      colors={["#cacff9","#f5cbd9","#f4bccd"]}
      start={{x:0, y:0}}
      end={{x:1, y:1}}
      locations={[0,0.5,1]}
    >
      <Post {...props}></Post>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    alignSelf: 'flex-end'
  },
});
