import React from "react";
import * as Styled from './BlogPosts.styles'
import BlogPost from './BlogPost.jsx'
import {Row} from "reactstrap";

const BlogPosts = () => {
    const blogposts = [
        {
            id: 0,
            title: "JAVASCRIPT",
            content: `JavaScript is the world most popular 
      lightweight, interpreted compiled programming 
      language. It is also known as scripting 
      language for web pages. It is well-known for 
      the development of web pages, many non-browser 
      environments also use it. JavaScript can be 
      used for Client-side developments as well as 
      Server-side developments`,
            author: "Nishant Singh ",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
            createdDate: "2012-04-23T18:25:43.511Z",
            lastUpdatedDate: "2012-04-23T18:25:43.511Z"
        },
        {
            id: 1,
            title: "C#",
            content: `C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. 
            C# is used to develop web apps, desktop apps, mobile apps, games and much more.`,
            author: "Daniel Holmes",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
            createdDate: "2012-04-23T18:25:43.511Z",
            lastUpdatedDate: "2012-04-23T18:25:43.511Z"
        },
        {
            id: 2,
            title: "React",
            content: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
            
            Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
            
            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.`,
            author: "ReactJS.org",
            imgUrl:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--6mhX1C7u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vx1ntk1reuhqo3tafbo.png",
            createdDate: "2012-04-23T18:25:43.511Z",
            lastUpdatedDate: "2012-04-23T18:25:43.511Z"
        },
        {
            id: 3,
            title: "JAVASCRIPT",
            content: `JavaScript is the world most popular 
      lightweight, interpreted compiled programming 
      language. It is also known as scripting 
      language for web pages. It is well-known for 
      the development of web pages, many non-browser 
      environments also use it. JavaScript can be 
      used for Client-side developments as well as 
      Server-side developments`,
            author: "Nishant Singh ",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
            createdDate: "2012-04-23T18:25:43.511Z",
            lastUpdatedDate: "2012-04-23T18:25:43.511Z"
        },
        {
            id: 4,
            title: "C#",
            content: `C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. 
            C# is used to develop web apps, desktop apps, mobile apps, games and much more.`,
            author: "Daniel Holmes",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
            createdDate: "2012-04-23T18:25:43.511Z",
            lastUpdatedDate: "2012-04-23T18:25:43.511Z"
        },
        {
            id: 5,
            title: "React",
            content: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
            
            Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
            
            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.`,
            author: "ReactJS.org",
            imgUrl:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--6mhX1C7u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vx1ntk1reuhqo3tafbo.png",
            createdDate: "2012-04-23T18:25:43.511Z",
            lastUpdatedDate: "2012-04-23T18:25:43.511Z"
        }]

        return (

            <Styled.BlogPosts>
                {blogposts.map((blogpost, index)=> (
                    <BlogPost key={index} index={index} blogpost={blogpost} />
                ))}
            </Styled.BlogPosts>
        );
};

export default BlogPosts;