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
    <h5>Posted on: {createdDate} </h5>
    <h5>Last updated: {lastUpdatedDate}</h5>
    </div>
)
    
const BlogPost = ({ blogpost, index }) => {
    const { title, content, imgUrl, author, createdDate, lastUpdatedDate } = blogpost
    console.log(title)
    return (
        <Styled.BlogPost>
            <Heading title={title} />
            <Image imgUrl={imgUrl} />
            <p>{content}</p>
            <Info author={author} createdDate={createdDate} lastUpdatedDate={lastUpdatedDate} />
        </Styled.BlogPost>
    )
}

export default BlogPost