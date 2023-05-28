import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1, 
      /*
        Note 1: Anything that we put in the screen appears in the center, middle of the screen
        because of these two properties "justifyContent" and "alignItems"

        Note 2: Do not create inline styles in production, it's better to use the StyleSheet API
        or StyleSheet components for production. 

        Note 3: 
      */
      justifyContent: "center", 
      alignItems: "center", 
    }}>
        <View  style={{
          backgroundColor: "dodgerblue", 
          width: 100, 
          height: 100, 
          borderWidth: 10, 
          borderColor: "royalblue", 
        }}></View>
      
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
