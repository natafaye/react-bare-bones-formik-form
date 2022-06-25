import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function CreatePostForm({ setPostList }) {

    const validatePost = (values) => {
        return {};
    }

    const onSubmit = (values) => {
        setPostList(postList => [...postList, values])
    }

    return (
        <div>
            <Formik 
                initialValues={{
                    author: 'Me',
                    text: ''
                }} 
                onSubmit={onSubmit} 
                validate={validatePost}
            >
                <Form className="p-3">
                    <div>
                        <label htmlFor="author-field">Author</label>
                        <Field name="author" id="author-field" />
                    </div>
                    <div>
                        <label htmlFor="text-field">Text</label>
                        <Field as="textarea" name="text" id="text-field" />
                    </div>
                    <button type='submit' className="btn btn-primary">
                        Make Post
                    </button>
                </Form>
            </Formik>
        </div>
    )
}
