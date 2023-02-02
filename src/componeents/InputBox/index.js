import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const InputBox = () => {
    const [newMessage,setNewMessage] = useState('')

    const onSend = () => {
        setNewMessage('')
    }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue' />
      <TextInput value={newMessage} onChangeText= {setNewMessage} style={styles.input} placeholder='type your message'/>
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={24} color='white' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'whitesmoke',
    padding:5,
    // marginHorizontal:10,
    alignItems:'center',
  },
  input:{
    flex:1,
    backgroundColor:'white',
    padding:5,
    paddingHorizontal:10,
    marginHorizontal:10,
    borderRadius:50,
    borderColor:'lightgray',
    borderWidth:StyleSheet.hairlineWidth,
  },
  send:{
    backgroundColor:'royalblue',
    padding:7,
    borderRadius:15,
    overflow:'hidden',
  },
})

export default InputBox