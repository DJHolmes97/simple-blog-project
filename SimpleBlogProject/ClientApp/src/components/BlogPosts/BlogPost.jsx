import React from "react";
import * as Styled from './BlogPost.styles';
import {Button, Card, CardBody, CardSubtitle, CardTitle, Col} from "reactstrap";


const Heading = ({ title }) => (
    <CardTitle tag="h1">{title}</CardTitle>
)
const Image = ({ imgUrl }) => (
    <Styled.ImageContainer>
        <Styled.Image src={imgUrl} alt="post"/>
    </Styled.ImageContainer>
)

const Info = ({ author, lastUpdatedDate }) => (
    <CardSubtitle tag="h5" className="pb-4">Written by: {author}<br/>Last updated: {lastUpdatedDate}</CardSubtitle>
)

const formatDateHelper = (dateJson) => {
    console.log(dateJson)
    return new Date(dateJson)
}

const BlogPost = ({ blogpost }) => {
    const { title, imgUrl, author, lastUpdatedDate } = blogpost

    const formattedLastUpdatedDate = formatDateHelper(lastUpdatedDate)

    return (
        <Styled.Column md="12" lg="6" xl="4" className="gy-2">
            <Card className="shadow">
                <Image imgUrl={imgUrl} />
                <CardBody>
                    <Heading title={title} />
                    <Info author={author}  lastUpdatedDate={formattedLastUpdatedDate.toLocaleString()} />
                    <div className="text-center">
                        <Button>Read Now!</Button>
                    </div>
                </CardBody>
            </Card>
        </Styled.Column>
    )
}

export default BlogPost