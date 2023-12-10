import React, {useContext} from 'react';
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({navigation, route}) {
    const {state, editBlogPost} = useContext(Context);
    const id = route.params.id;
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    return (
        <BlogPostForm
            isEditable={true}
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.navigate ("Index") )
            }}

        />
    );
}

