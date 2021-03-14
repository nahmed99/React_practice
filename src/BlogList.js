
//const BlogList = ( props ) => {  // Note: No curly braces
   // blogs = props.blogs;   // This way you have to retrieve from the props high-level qualifier
   // title = props.title;

const BlogList = ( { blogs, title } ) => {  // De-structured variable(s)


   return (
      <div className="blog-list">
         <h2> {title} </h2>
         { blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
               <h2> { blog.title } </h2>
               <p>Written by { blog.author } </p>
            </div>
         )) }
      </div>
   );

}

export default BlogList;