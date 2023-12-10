import React, {useContext} from 'react';
import {Button, FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';
export default function IndexScreen({navigation}) {
    const {state, addBlogPost, deleteBlogPost} = useContext (Context);
    return (
            <View>
                <FlatList
                    data={state}
                    keyExtractor={(blogPosts) => blogPosts.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() =>navigation.navigate("Show", { id: item.id })}>
                              <View style={styles.row}>
                                   <Text style={styles.title}> {item.title} </Text>
                                    <TouchableOpacity onPress={()=> deleteBlogPost (item.id)}>
                                        <Feather name="trash" size={24} color="black" />
                                    </TouchableOpacity>
                              </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
    );
}
const styles =StyleSheet.create ({
    row: {
        flexDirection:"row",
        justifyContent:"space-between",
        borderTopWidth:1,
        paddingVertical:20,
        paddingHorizontal:1,
        borderColor:"gray",
    },
    title:{
        fontSize:18
    },
});


