import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView} from 'react-native';
import Post from './src/components/Post.js'
import {LinearGradient} from 'expo-linear-gradient';

const post1 = {titulo:'text text', imagem: require('./assets/bird.jpg'), resumo:'text text'}
const post2 = {titulo:'text text', imagem: require('./assets/book.jpg'), resumo:'text text'}

export default function App() {
  return (
    <ScrollView>
      <LinearGradient 
        style={styles.container}
        colors={["#cacff9","#f5cbd9","#f4bccd"]}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        locations={[0,0.5,1]}
      >
        <Post {...post1}></Post>
        <Post {...post2}></Post>
        <StatusBar style="auto" />
      </LinearGradient>
    </ScrollView>
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
  }
});
