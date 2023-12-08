import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
export default function BlogPostForm() {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

return (
        <View>
            <Text> Write  Your Title </Text>
            <TextInput
            value={title}
            onChangeText={(text)=> setTitle(text)} />
            <Text> Write  Your Content </Text>
            <TextInput
                value={content}
                onChangeText={(text)=> setContent(text)} />
            <TouchableOpacity>
                <Text> SAVE </Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create ({ });
