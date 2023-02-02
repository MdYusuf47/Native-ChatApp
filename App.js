import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
// import ChatsScreens from './src/screens/ChatsScreen';
import Navigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
    <Navigator/>
      {/* <ChatsScreens/> */}
      {/* <ChatScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // paddingVertical:50,
  },
});
