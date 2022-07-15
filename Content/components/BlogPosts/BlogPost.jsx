import React from "react";
import * as Styled from './BlogPost.styles';


const Heading = ({ title }) => (
    <Styled.Heading>{title}</Styled.Heading>
)
const Image = ({ imgUrl }) => (
    <Styled.Image src={imgUrl} alt="post"/>
)

const Info = ({ author, createdDate, lastUpdatedDate }) => (
    <div>
    <h4>Written by: {author}</h4>
    <p>Posted on: {createdDate} </p>
    <p>Last updated: {lastUpdatedDate}</p>
    </div>
)

const formatDateHelper = (dateJson) => {
    console.log(dateJson)
    return new Date(dateJson)
}

const formatContentExcerpt = (content) => {
    console.log(content)
    const contentSliced = content.slice(0, 140)
    console.log(contentSliced)
    const re = /[.,\/#!$%^&*;:{}=\-_`~()\s]*$/
    const contentEndCheck = contentSliced.replace(re, "")
    console.log(contentEndCheck)
    return contentEndCheck.concat('...');
}
    
const BlogPost = ({ blogpost, index }) => {
    const { title, content, imgUrl, author, createdDate, lastUpdatedDate } = blogpost
    
    const formattedCreatedDate = formatDateHelper(createdDate)
    const formattedLastUpdatedDate = formatDateHelper(lastUpdatedDate)
    
    const formattedExcerpt = formatContentExcerpt(content)
    return (
        <Styled.BlogPost>
            <Heading title={title} />
            <Image imgUrl={imgUrl} />
            <Styled.Excerpt>{formattedExcerpt}</Styled.Excerpt>
            <Info author={author} createdDate={formattedCreatedDate.toLocaleString()} lastUpdatedDate={formattedLastUpdatedDate.toLocaleString()} />
        </Styled.BlogPost>
    )
}

export default BlogPost