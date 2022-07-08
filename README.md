# simple-blog-project
Practicing creating a ReactJS.Net Application

Basic spec:

-Your site must have a home page that lists all the blog posts.

-Your site must have a page to allow a logged in user to create a blog post.

-Your site must have a page to allow a blog posts author to edit a blog post.

-Only a blog posts author should be able to edit a blog post.

-Only the author should be able to see the edit link.

-If anyone other the author attempts to access a posts edit page they must be redirected to a 403 page.

-A blog post has these properties:

  -Id (int)
  
  -Author (user id, guid)
  
  -Title (string)
  
  -Content (string)
  
  -Created_date (datetimeoffset)
  
  -Last_updated date (nullable datetimeoffset)
  
-When a user submits a blog post, the content must be validated and errors reported back to the user

-A logged in user should be able to create a new blog post.

-An anonymous user should only be able to read blog post.

