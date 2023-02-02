import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from 'dayjs'
import { useNavigation } from '@react-navigation/native'
dayjs.extend(relativeTime)


export default function ChatListItem({chat}) {
    const navigation = useNavigation();
    return (
        <Pressable onPress={()=>navigation.navigate('Chat',{id:chat.id,name:chat.user.name})} style={styles.container}>
            <Image source={{uri:chat.user.image}} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70
    },
    image: {
        width: 60,
        height: 60,
        borderRadius:30,
        borderRadius:30,
        marginRight:10,
    },
    content: {
        flex:1,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
    },
    row: {
        flexDirection:'row',
        marginBottom:5,
    },
    name: {
        flex:1,
        fontWeight:'bold',
    },
    subTitle: {
        color:'gray',
    }
})