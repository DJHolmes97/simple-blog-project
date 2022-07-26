import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row } from "reactstrap";

import BlogPosts from "./BlogPosts/BlogPosts.jsx";


const HomePage = () => (
    <Fragment>
        <Helmet>
            <title>Daniel Holmes Blog</title>
        </Helmet>
        Below are a collection of my personal projects that I have completed throughout my time.


        <BlogPosts />


    </Fragment>
)

export const Home = () => (
        <Container className="bg-light">
                <h1 className="display-4">Daniel Holmes Frontend Engineer</h1>
                <hr className="my-4" />
                <HomePage />
            </Container>
)