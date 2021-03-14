import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

   // The following variables are 'reactove', i.e., they are on a watchlist for any changes.
   // If changes are detected, then the app will react to those changes (re-render the template where they exist)

   const [blogs, setBlogs] = useState(null);

   // const [blogs, setBlogs] = useState([
   //    { title: "The State", body: "Control the population", author: "Me Oh My", id: 1},
   //    { title: "The Republic", body: "Exploit the population", author: "What You Too", id: 2},
   //    { title: "The Monarchy", body: "Rule the population", author: "Do Not Ask", id: 3},
   //    { title: "None Of The Above", body: "I Am", author: "Free!", id: 4}
   // ]);

   

   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);

      setBlogs(newBlogs);
   }

   
   // useEffect (without a dependency array) will run everytime the page is rendered.
   useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(response => {
         return response.json() //parses json data into JS object format - in this case, that is an array.
      })
      .then((data) => { // date returned from above (then)
         setBlogs(data);
         console.log(data);
      })
   }, []);  // empty dependency array ensures that useEffect only runs on initial render, and not for any subsequent renders.


   return (
      <div className="home">
         {blogs && <BlogList blogs={ blogs } 
                   title="All Blogs!" 
                   handleDelete={handleDelete} 
                   />}
         {/* <BlogList blogs={ blogs.filter((blog) => blog.author==="Free!") } title="Free's Blogs!" /> */}
      </div>
   );
}

export default Home;