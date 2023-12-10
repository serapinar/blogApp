import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from "../context/BlogContext";

export default function ShowScreen({route}) {
    const {state} = useContext(Context);
    console.log(route.params.id);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.label}> Title</Text>
                <Text style={styles.content}> {blogPost.title}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.label}> Content</Text>
                <Text style={styles.content}> {blogPost.content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems:"center",
        marginTop:10,

    },
    container: {
        borderWidth:1,
        marginBottom:10,
        borderRadius:30,
        alignItems:"center",
        width:"90%"
    },
    label: {
        fontSize:30,

    },
    content: {
        fontSize:18,
    },


});


