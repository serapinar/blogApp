import React from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {useContext} from 'react'
import {Context} from "../context/BlogContext";

export default function CreateScreen({navigation}) {
    const {addBlogPost} = useContext(Context);
    return (
        <BlogPostForm onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate ("Index") )
        }}
        />

    );
}


const styles = StyleSheet.create({});
