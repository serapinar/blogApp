import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
export default function BlogPostForm({onSubmit, initialValues, isEditable}) {
const [title, setTitle] = useState(initialValues ? initialValues.title :'');
const [content, setContent] = useState( initialValues ? initialValues.content : '');

return (
        <View style={styles.main}>
            <Text style={styles.label}> Write  Your Title </Text>
            <TextInput style={styles.input}
            value={title}
            onChangeText={(text)=> setTitle(text)}
            />
            <Text style={styles.label}> Write  Your Content </Text>
            <TextInput style={styles.input}
                value={content}
                onChangeText={(text)=> setContent(text)}
            />
            <TouchableOpacity style={styles.buttonMain} onPress={() => onSubmit (title, content)}>
                <View style={styles.buttonView}>
                    {isEditable ? (<Text style={styles.buttonText}> UPDATE </Text>) : (<Text style={styles.buttonText}> SAVE </Text>)}
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create ({
    main:{
      marginTop:10,
    },
    label:{
        fontSize:20,
        marginLeft:10,
    },
    input:{
        borderWidth:1,
        margin:10,
        borderRadius:20,
        padding:5,
        fontSize:18,
        marginBottom:15,
    },
    buttonView:{
        backgroundColor:"#2669cd",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    buttonMain:{
        padding:30,
    },
    buttonText:{
        color:"#ffffff",
        fontSize:20,
    },
})
